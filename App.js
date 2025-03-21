import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import PostDetailScreen from "./PostDetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: "Inicio de Sesión" }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Publicaciones" }} />
        <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} options={{ title: "Detalle de Publicación" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
