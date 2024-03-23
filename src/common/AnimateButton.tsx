import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { FadeInDown, FadeInLeft } from "react-native-reanimated";
import { colors } from "../constent/theme";
import { Ionicons } from "@expo/vector-icons";

interface IAnimateButton {
  price: number;
}
const AnimateButton = (props: IAnimateButton) => {
  const { width } = useWindowDimensions();
  const inset = useSafeAreaInsets();

  const AnimatedPressable = Animated.createAnimatedComponent(TouchableOpacity);
  return (
    <Animated.View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 18,
        alignItems: "center",
        marginBottom: inset.bottom,
        alignContent: "center",
      }}
    >
      <Animated.View entering={FadeInDown.delay(1700)}>
        <Animated.Text
          entering={FadeInLeft.delay(2300)}
          style={{ fontSize: 12, fontWeight: "500", color: colors.aceSliver }}
        >
          Total Price
        </Animated.Text>
        <Animated.Text
          entering={FadeInLeft.delay(2400)}
          style={{ fontSize: 20, fontWeight: "800", color: colors.black }}
        >
          ${props?.price}
        </Animated.Text>
      </Animated.View>
      <AnimatedPressable
        style={[styles.container, { width: width * 0.5 }]}
        entering={FadeInDown.delay(1400)}
        onPress={() => {
          console.log("BOOKING NOW");
        }}
      >
        <Animated.View
          entering={FadeInDown.delay(2000)}
          style={{ marginRight: 6 }}
        >
          <Ionicons name="cart-outline" color={colors.white} size={20} />
        </Animated.View>
        <Animated.Text entering={FadeInDown.delay(2000)} style={styles.text}>
          Buy Now
        </Animated.Text>
      </AnimatedPressable>
    </Animated.View>
  );
};

export default AnimateButton;

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
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});
