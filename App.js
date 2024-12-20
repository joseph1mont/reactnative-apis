import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Screens/HomeScreen";
import AnimatedScreen from "./Screens/AnimatedScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Animated" // Set the initial route here
        screenOptions={{
          headerStyle: { backgroundColor: "grey" }, // Apply header styling here
          headerTintColor: "white", // Optional: Set header text color
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home Page" }}
        />
        <Stack.Screen
          name="Animated"
          component={AnimatedScreen}
          options={{ title: "About Animation" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
