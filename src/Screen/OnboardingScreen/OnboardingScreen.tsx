import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Onboarding from "../../component/Onboarding/Onboarding";
import { StatusBar } from "expo-status-bar";

const OnboardingScreen = () => {
  return (
    <View>
      <StatusBar style="auto" animated hidden />
      <Onboarding />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
