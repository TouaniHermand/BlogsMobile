import { createContext, useReducer, useState } from "react";
import jsonServer from "../api/jsonServer";

export const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "getBlogPosts":
      return action.payload;

    case "editBlogPost":
      const { blogEdit } = action.payload;
      return state.map((blogPost) => {
        return blogPost.id === blogEdit.id ? blogEdit : blogPost;
      });

    case "deleteBlogPost":
      const { id } = action.payload;
      return state.filter((blogPost) => blogPost.id !== id);

    default:
      return state;
  }
};

const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);
  const [errors, setErrors] = useState("");

  const getBlogPosts = async () => {
    try {
      const response = await jsonServer.get("/blogPosts");
      dispatch({ type: "getBlogPosts", payload: response.data });
    } catch (error) {
      setErrors("Erreur lors du chargement des blogs");
    }
  };

  const addBlogPost = async (blog, callback) => {
    try {
      await jsonServer.post("/blogPosts", blog);
      callback();
      getBlogPosts();
    } catch (err) {
      setErrors("Erreur lors de l'ajout");
    }
  };

  const deleteBlogPost = (id) => {
    dispatch({ type: "deleteBlogPost", payload: { id } });
  };

  const editBlogPost = (blogEdit, callback) => {
    dispatch({ type: "editBlogPost", payload: { blogEdit } });
    callback();
  };

  return (
    <BlogContext.Provider
      value={{
        blogPosts: blogPosts,
        addBlogPost: addBlogPost,
        deleteBlogPost,
        editBlogPost,
        getBlogPosts,
        errors,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
