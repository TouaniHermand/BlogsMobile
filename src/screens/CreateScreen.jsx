import { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { BlogContext } from "../context/BlogContext";
import { useNavigation, useRoute } from "@react-navigation/native";

const CreateScreen = () => {
  const [blogForm, setBlogForm] = useState({
    id: Math.floor(Math.random() * 999),
    title: "",
    content: "",
  });

  const [blogFormEdit, setBlogFormEdit] = useState({
    id: "",
    title: "",
    content: "",
  });

  const navigation = useNavigation();
  const { addBlogPost, errors, blogPosts, editBlogPost } =
    useContext(BlogContext);

  const route = useRoute();
  const id = route.params ? route.params.id : null;

  const blogEdit = blogPosts.find((blog) => parseInt(blog.id) === parseInt(id));

  useEffect(() => {
    if (blogEdit) {
      setBlogFormEdit({
        id: blogEdit.id,
        title: blogEdit.title,
        content: blogEdit.content,
      });
    }
  }, []);

  return (
    <View style={styles.containParent}>
      {errors && <Text>{errors}</Text>}
      <View style={styles.containChild}>
        <Text style={styles.text}>Enter title</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            blogEdit
              ? setBlogFormEdit((prev) => ({ ...prev, title: text }))
              : setBlogForm((prev) => ({ ...prev, title: text }))
          }
          value={blogEdit ? blogFormEdit.title : blogForm.title}
        />
      </View>
      <View style={styles.containChild}>
        <Text style={styles.text}>Enter Content</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            blogEdit
              ? setBlogFormEdit((prev) => ({ ...prev, content: text }))
              : setBlogForm((prev) => ({ ...prev, content: text }))
          }
          value={blogEdit ? blogFormEdit.content : blogForm.content}
        />
      </View>
      <Button
        title={blogEdit ? "Updated" : "Save"}
        onPress={() => {
          blogEdit
            ? editBlogPost(blogFormEdit, () => navigation.navigate("Blogs"))
            : addBlogPost(blogForm, () => navigation.navigate("Blogs"));
        }}
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

export default CreateScreen;
