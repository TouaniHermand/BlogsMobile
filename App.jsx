import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/indexScreen";
import BlogProvider from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowSreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Blogs">
          <Stack.Screen name="Blogs" component={IndexScreen} />
          <Stack.Screen name="Show" component={ShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
