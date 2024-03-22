import { Text, View } from "react-native";
import React from "react";
import { IProduct } from "../types/types";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import ProductDetailsScreen from "../Screen/ProductDetailsScreen/ProductDetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "../component/ProductDetail/ProductList";

export type SharedElementStackParamList = {
  Home: undefined;
  ProductDetail: { item: IProduct };
  ProductList: { item: IProduct };
};

const SharedElementNavigator = () => {
  const Stack = createNativeStackNavigator<SharedElementStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, animation: "slide_from_right" }}
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
};

export default SharedElementNavigator;
