import { createContext, useReducer } from "react";

export const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "addBlogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: `Blog Post ${state.length + 1}`,
        },
      ];

    case "deleteBlogPost":
      const { id } = action.payload;
      return state.filter((blogPost) => blogPost.id !== id);

    default:
      return state;
  }
};

const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: "addBlogPost" });
  };

  const deleteBlogPost = (id) => {
    dispatch({ type: "deleteBlogPost", payload: { id } });
  };

  const editBlogPost = (blog) => {};

  return (
    <BlogContext.Provider
      value={{ blogPosts: blogPosts, addBlogPost: addBlogPost, deleteBlogPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
