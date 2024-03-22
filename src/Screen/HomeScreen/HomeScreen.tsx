import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../../component/Home/Home";
import HomePage from "../../component/Home/Home";

const HomeScreen = () => {
  return (
    <View style={{}}>
      {/* <Home /> */}
      <HomePage loading={true} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
