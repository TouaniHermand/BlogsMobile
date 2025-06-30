import { createContext, useState } from "react";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts((blog) => [
      ...blog,
      { title: `Blog Post ${blog.length + 1} ` },
    ]);
  };
  return (
    <BlogContext.Provider
      value={{ blogPosts: blogPosts, addBlogPost: addBlogPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
