import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import OnboardingScreen from "./src/Screen/OnboardingScreen/OnboardingScreen";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/navigation/RootNavigation";
import Retry from "./src/common/Retry";
import DrawerNavigation from "./src/navigation/DrawerNavigation";
import { StatusBar } from "expo-status-bar";
import SharedElementNavigator from "./src/navigation/SharedElementNavigator";
import Main from "./src/app";
import LoginScreen from "./src/Screen/LoginScreen/LoginScreen";

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
          <DrawerNavigation />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    // backgroundColor: "#E5E5E5",
  },
});
