import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import HomePage from "../../component/Home/Home";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const { height } = useWindowDimensions();
  return (
    <View style={{}}>
      <HomePage />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
