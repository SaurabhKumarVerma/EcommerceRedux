import { View } from "react-native";
import React, { useEffect } from "react";
import OnboardingScreen from "./Screen/OnboardingScreen/OnboardingScreen";
import SharedElementNavigator from "./navigation/SharedElementNavigator";
import { StatusBar } from "expo-status-bar";
import { colors } from "./constent/theme";
import Retry from "./common/Retry";
import { useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";

const Main = () => {
  const network = useAppSelector((state: RootState) => state.network);

  useEffect(() => {}, [network.isConnected]);

  return (
    <View style={{ flex: 1 }}>
      <OnboardingScreen />
      <Retry />
      <SharedElementNavigator />
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
