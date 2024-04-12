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
import { DrawerActions, useNavigation } from "@react-navigation/native";

const AnimatedPressable = Animated.createAnimatedComponent(TouchableOpacity);

const HomeHeader = () => {
  const progress = useDerivedValue(() => withTiming(0));
  const navigation = useNavigation();
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * -180}deg` }],
  }));

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <AnimatedPressable
      onPress={() => openDrawer()}
      style={styles.container}
      entering={(FadeIn.delay(1500), FadeInLeft.delay(1600))}
      hitSlop={{ top: 80, bottom: 80, left: 80, right: 80 }}
    >
      <Animated.View
        entering={RotateInDownLeft}
        exiting={RotateOutDownLeft}
        style={[styles.menuContainer, iconStyle]}
      >
        <Iconpack name="hamburger" size={12} color={colors.white} />
      </Animated.View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/favicon.png")}
          style={{ width: 20, height: 22 }}
        />
      </View>
    </AnimatedPressable>
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
