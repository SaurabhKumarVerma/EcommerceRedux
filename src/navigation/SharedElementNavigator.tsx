import { Text, View } from "react-native";
import React from "react";
import { IProduct } from "../types/types";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import ProductDetailsScreen from "../Screen/ProductDetailsScreen/ProductDetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "../component/ProductDetail/ProductList";
import MyTabs from "./BottomNavigation";

export type SharedElementStackParamList = {
  HomeTab: undefined;
};

const Stack = createNativeStackNavigator();

function SharedElementNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeTab"
        component={MyTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailsScreen}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
}

export default SharedElementNavigator;
