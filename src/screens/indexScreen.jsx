import { useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const IndexScreen = () => {
  const { blogPosts, addBlogPost, deleteBlogPost, getBlogPosts } =
    useContext(BlogContext);

  useEffect(() => {
    getBlogPosts();
  }, []);

  const navigation = useNavigation();

  return (
    <View>
      <Button title="Add Blog" onPress={() => navigation.navigate("Create")} />
      {blogPosts && (
        <FlatList
          data={blogPosts}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.container}>
                <Text style={styles.text}>
                  {item.title} - {item.id}
                </Text>
                <View style={styles.buttonContainer}>
                  <EvilIcons
                    name="pencil"
                    style={styles.icon}
                    color="black"
                    onPress={() =>
                      navigation.navigate("Create", { id: item.id })
                    }
                  />
                  <Feather
                    name="trash"
                    style={styles.icon}
                    color="black"
                    onPress={() => deleteBlogPost(item.id)}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  icon: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default IndexScreen;
