import { useContext } from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import { BlogContext } from "../context/BlogContext";

const IndexScreen = () => {
  const { blogPosts, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      {blogPosts && (
        <FlatList
          data={blogPosts}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      )}
      <Text>Index Screen</Text>
      <Button title="Add Blog" onPress={() => addBlogPost()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
