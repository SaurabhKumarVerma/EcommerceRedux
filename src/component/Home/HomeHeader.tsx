import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef } from "react";
import Iconpack from "../../common/Icon/Icon";
import { colors } from "../../constent/theme";
import Animated, {
  FadeIn,
  FadeInLeft,
  RotateInDownLeft,
  RotateOutDownLeft,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(TouchableOpacity);

const HomeHeader = () => {
  const progress = useDerivedValue(() => withTiming(0));

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * -180}deg` }],
  }));

  return (
    <Animated.View
      style={styles.container}
      entering={(FadeIn.delay(1500), FadeInLeft.delay(1600))}
    >
      <AnimatedPressable
        entering={RotateInDownLeft}
        exiting={RotateOutDownLeft}
        style={[styles.menuContainer, iconStyle]}
      >
        <Iconpack name="hamburger" size={12} color={colors.white} />
      </AnimatedPressable>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/favicon.png")}
          style={{ width: 20, height: 22 }}
        />
      </View>
    </Animated.View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 40,
    height: 40,
    backgroundColor: colors.gainsboro,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
