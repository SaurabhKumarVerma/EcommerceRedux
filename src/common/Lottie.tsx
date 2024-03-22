import { StyleProp, StyleSheet, Text, View, ViewProps } from "react-native";
import React from "react";
import LottieView, { LottieViewProps } from "lottie-react-native";

interface ILottie {
  path: string;
  viewStyle?: StyleProp<ViewProps>;
  speed?: number;
}

const Lottie = (props: ILottie) => {
  return (
    <View>
      <LottieView
        source={props.path}
        autoPlay={true}
        style={props.viewStyle ?? { width: "100%", height: "100%" }}
        speed={props.speed || 1}
      />
    </View>
  );
};

export default Lottie;

const styles = StyleSheet.create({});
