import { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { BlogContext } from "../context/BlogContext";
import { useNavigation, useRoute } from "@react-navigation/native";

const UpdatedScreen = () => {
  const [blogFormEdit, setBlogFormEdit] = useState({
    id: "",
    title: "",
    content: "",
  });

  const navigation = useNavigation();

  const { id } = useRoute().params;

  const { blogPosts, editBlogPost } = useContext(BlogContext);

  const blog = blogPosts.find((blog) => parseInt(blog.id) === parseInt(id));

  useEffect(() => {
    setBlogFormEdit({
      id: blog.id,
      title: blog.title,
      content: blog.content,
    });
  }, [blog]);

  return (
    <View style={styles.containParent}>
      <View style={styles.containChild}>
        <Text style={styles.text}>Enter title</Text>
        <TextInput
          style={styles.input}
          value={blogFormEdit.title}
          onChangeText={(text) =>
            setBlogFormEdit((prev) => ({ ...prev, title: text }))
          }
        />
      </View>
      <View style={styles.containChild}>
        <Text style={styles.text}>Enter Content</Text>
        <TextInput
          style={styles.input}
          value={blogFormEdit.content}
          onChangeText={(text) =>
            setBlogFormEdit((prev) => ({ ...prev, content: text }))
          }
        />
      </View>
      <Button
        title="Save"
        onPress={() =>
          editBlogPost(blogFormEdit, () => navigation.navigate("Blogs"))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containParent: {
    height: 300,
    justifyContent: "space-around",
    marginHorizontal: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
});

export default UpdatedScreen;
