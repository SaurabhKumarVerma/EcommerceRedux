import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Main from "./src/app";

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
        <Main />
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
