import React, { useEffect } from "react";
import ProductDetailsScreen from "../Screen/ProductDetailsScreen/ProductDetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "../component/ProductDetail/ProductList";
import MyTabs from "./BottomNavigation";
import { StatusBar } from "react-native";
import DrawerNavigation from "./DrawerNavigation";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import LoginScreen from "../Screen/LoginScreen/LoginScreen";
import { getUserToken } from "../redux/slices/AuthSlices";

export type SharedElementStackParamList = {
  HomeTab: undefined;
};

const Stack = createNativeStackNavigator();

function SharedElementNavigator() {
  const userData = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    getUserToken();
  }, [userData.isTokenAvailable]);
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      {userData.isTokenAvailable === null && (
        <Stack.Screen name="Login" component={LoginScreen} options={{}} />
      )}

      {userData.isTokenAvailable !== null && (
        <>
          <Stack.Screen
            name="HomeTab"
            component={MyTabs}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ProductDetail"
            component={ProductDetailsScreen}
            options={{}}
          />
          <Stack.Screen name="ProductList" component={ProductList} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default SharedElementNavigator;
