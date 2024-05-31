import { SafeAreaView, View } from "react-native";
import React, { useEffect, useState } from "react";
import OnboardingScreen from "./Screen/OnboardingScreen/OnboardingScreen";
import SharedElementNavigator from "./navigation/SharedElementNavigator";
import { StatusBar } from "expo-status-bar";
import { colors } from "./constent/theme";
import Retry from "./common/Retry";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./navigation/RootNavigation";
import AuthNavigator from "./navigation/AuthNavigator";
import DrawerNavigation from "./navigation/DrawerNavigation";
import { getUserToken } from "./redux/slices/AuthSlices";
import { getToken } from "./service/asyncStorage/storage";
import Config from "react-native-config";
import ECommerceAsyncStore from "./service/asyncStorage/userStorage";

const Main = () => {
  const userData = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkToken = async () => {
      const token = await retrieveToken();
      dispatch(getUserToken(token)); // Update Redux state
    };
    checkToken();
  }, [dispatch]);

  const retrieveToken = async () => {
    let token = await ECommerceAsyncStore.getAccessToken();

    if (token) {
      return JSON.parse(token);
    } else {
      return null;
    }
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        style="auto"
        animated
        backgroundColor={colors.gainsboro}
        hidden
      />

      <Retry />
      <OnboardingScreen />
      {!userData.isTokenAvailable ? <AuthNavigator /> : <DrawerNavigation />}
    </NavigationContainer>
  );
};

export default Main;
