import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { colors } from "../constent/theme";
interface ICustomButton {
  onClick: () => void;
  label: string;
}

const CustomButton = (props: ICustomButton) => {
  const AnimatedPressable = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <TouchableOpacity
      style={[styles.container]}
      //   entering={FadeInDown.delay(1400)}
      onPress={() => props.onClick()}
    >
      <Animated.Text entering={FadeInDown.delay(2000)} style={styles.text}>
        {props.label}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    padding: 16,
    alignItems: "center",
    borderRadius: 40,
    flexDirection: "row",
    justifyContent: "center",
    // marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "700",
    letterSpacing: 1,
  },
});
