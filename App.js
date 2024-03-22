import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import HomeScreen from "./src/Screen/HomeScreen/HomeScreen";
import OnboardingScreen from "./src/Screen/OnboardingScreen/OnboardingScreen";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import SharedElementNavigator from "./src/navigation/SharedElementNavigator";
import Main from "./src/app";
import { navigationRef } from "./src/navigation/RootNavigation";

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
      <NavigationContainer ref={navigationRef}>
        <Main />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});
