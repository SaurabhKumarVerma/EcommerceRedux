import { StatusBar } from "expo-status-bar";
import {StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import OnboardingScreen from "./src/Screen/OnboardingScreen/OnboardingScreen";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/navigation/RootNavigation";
import MyStack from "./src/navigation/SharedElementNavigator";
import Retry from "./src/common/Retry";

export const Icon = createIconSetFromIcoMoon(
  require("./assets/icon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./assets/icon/icomoon.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <OnboardingScreen />
          <Retry />
          <MyStack />
        </NavigationContainer>
      </Provider>
      <StatusBar hidden />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#E5E5E5",
  },
});
