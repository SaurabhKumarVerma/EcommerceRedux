import { SafeAreaView, View } from "react-native";
import React, { useEffect } from "react";
import OnboardingScreen from "./Screen/OnboardingScreen/OnboardingScreen";
import SharedElementNavigator from "./navigation/SharedElementNavigator";
import { StatusBar } from "expo-status-bar";
import { colors } from "./constent/theme";
import Retry from "./common/Retry";
import { useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Main = () => {
  const network = useAppSelector((state: RootState) => state.network);

  useEffect(() => {}, [network.isConnected]);

  return (
    <View style={{}}>
      <StatusBar
        style="auto"
        animated
        backgroundColor={colors.gainsboro}
        hidden
      />
      <OnboardingScreen />
      <Retry />
      <SharedElementNavigator />
    </View>
  );
};

export default Main;
