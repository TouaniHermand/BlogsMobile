import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/indexScreen";
import BlogProvider from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowSreen";
import CreateScreen from "./src/screens/CreateScreen";
import { Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import UpdatedScreen from "./src/screens/UpdatedScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Blogs">
          <Stack.Screen
            name="Blogs"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerTitle: "Blogs",
              headerRight: () => (
                <EvilIcons
                  name="plus"
                  size={26}
                  style={{ fontWeight: "bold", color: "blue" }}
                  onPress={() => navigation.navigate("Create")}
                />
              ),
              headerStyle: { backgroundColor: "#FFF0EE" },
            })}
          />
          <Stack.Screen name="Show" component={ShowScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={UpdatedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
