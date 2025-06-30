import { createContext, useReducer, useState } from "react";

export const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "addBlogPost":
      const { blog } = action.payload;

      return [...state, blog];

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

  const addBlogPost = (blog) => {
    if (blog.title && blog.content && blog.id) {
      dispatch({ type: "addBlogPost", payload: { blog } });
    } else {
      setErrors("Veuillez remplir tous les champs");
    }
  };

  const deleteBlogPost = (id) => {
    dispatch({ type: "deleteBlogPost", payload: { id } });
  };

  const editBlogPost = (blog) => {};

  return (
    <BlogContext.Provider
      value={{
        blogPosts: blogPosts,
        addBlogPost: addBlogPost,
        deleteBlogPost,
        errors,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
