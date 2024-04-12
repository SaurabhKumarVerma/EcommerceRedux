import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "../../component/Login/Login";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <Login />
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
