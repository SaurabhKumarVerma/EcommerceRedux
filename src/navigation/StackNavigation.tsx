import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackNavigationProps } from "../types/NavigationTypes";
import { View } from "react-native";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator<HomeStackNavigationProps>();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"HomeScreen"}
        component={HomeScreen}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
};
