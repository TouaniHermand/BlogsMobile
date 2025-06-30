import { useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { View, Text } from "react-native";
import { BlogContext } from "../context/BlogContext";

const ShowScreen = () => {
  const route = useRoute();
  const { id } = route.params;
  console.log(id);

  const { blogPosts } = useContext(BlogContext);

  const blog = blogPosts.filter((blog) => parseInt(blog.id) === parseInt(id));

  return (
    <View>
      <Text>{blog[0].title}</Text>
      <Text>My Big Blog post today is about xyz</Text>
    </View>
  );
};

export default ShowScreen;
