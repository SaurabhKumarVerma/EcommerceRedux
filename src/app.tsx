import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import OnboardingScreen from "./Screen/OnboardingScreen/OnboardingScreen";
import SharedElementNavigator from "./navigation/SharedElementNavigator";
import { StatusBar } from "expo-status-bar";
import { colors } from "./constent/theme";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <OnboardingScreen />
        <SharedElementNavigator />
      </Provider>
      <StatusBar
        style="auto"
        animated
        backgroundColor={colors.gainsboro}
        hidden
      />
    </View>
  );
};

export default Main;
