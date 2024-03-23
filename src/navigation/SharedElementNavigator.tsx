import React from "react";
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
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      <Stack.Screen
        name="HomeTab"
        component={MyTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="ProductDetail" component={ProductDetailsScreen} />
      <Stack.Screen name="ProductList" component={ProductList} />
    </Stack.Navigator>
  );
}

export default SharedElementNavigator;
