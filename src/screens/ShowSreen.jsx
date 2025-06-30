import { useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BlogContext } from "../context/BlogContext";

const ShowScreen = () => {
  const route = useRoute();
  const { id } = route.params;
  console.log(id);

  const { blogPosts } = useContext(BlogContext);

  const blog = blogPosts.find((blog) => parseInt(blog.id) === parseInt(id));

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{blog.title}</Text>
      <Text>My Big Blog post today is about xyz</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
});

export default ShowScreen;
