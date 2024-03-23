import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../../component/Home/Home";
import HomePage from "../../component/Home/Home";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{}}>
      <HomePage />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
