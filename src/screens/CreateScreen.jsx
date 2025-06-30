import { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { BlogContext } from "../context/BlogContext";

const CreateScreen = () => {
  const [blogForm, setBlogForm] = useState({
    id: Math.floor(Math.random() * 999),
    title: "",
    content: "",
  });

  const { addBlogPost, errors } = useContext(BlogContext);
  return (
    <View style={styles.containParent}>
      {errors && <Text>{errors}</Text>}
      <View style={styles.containChild}>
        <Text style={styles.text}>Enter title :{blogForm.title}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setBlogForm((prev) => ({ ...prev, title: text }))
          }
          value={blogForm.title}
        />
      </View>
      <View style={styles.containChild}>
        <Text style={styles.text}>Enter Content :{blogForm.content}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setBlogForm((prev) => ({ ...prev, content: text }))
          }
          value={blogForm.content}
        />
      </View>
      <Button title="Save" onPress={() => addBlogPost(blogForm)} />
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
