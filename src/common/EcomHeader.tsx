import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../constent/theme";
import Animated, {
  FadeIn,
  FadeInLeft,
  FadeInRight,
} from "react-native-reanimated";
import Iconpack from "./Icon/Icon";
import { Ionicons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

const AnimateTouchable = Animated.createAnimatedComponent(TouchableOpacity);

interface IEcomHeader {
  iconName?: string;
  onClick?: () => void;
}
const EcomHeader = (props: IEcomHeader) => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <Animated.View
      style={{ justifyContent: "space-between", flexDirection: "row" }}
    >
      <AnimateTouchable
        onPress={() => navigation.goBack()}
        style={styles.btnContainer}
        entering={(FadeIn.delay(500), FadeInLeft.delay(600))}
      >
        <Animated.View style={{ padding: 10 }} entering={FadeInLeft.delay(700)}>
          <Iconpack name="leftArrow" color={colors.white} size={20} />
        </Animated.View>
      </AnimateTouchable>

      {props.iconName ? (
        <AnimateTouchable
          entering={(FadeIn.delay(500), FadeInRight.delay(600))}
          style={styles.btnContainer}
          onPress={props.onClick}
        >
          <Animated.View
            style={{ padding: 10 }}
            entering={FadeInRight.delay(700)}
          >
            <Ionicons name={props.iconName} color={colors.white} size={20} />
          </Animated.View>
        </AnimateTouchable>
      ) : null}
    </Animated.View>
  );
};

// cart-outline

export default EcomHeader;

const styles = StyleSheet.create({
  btnContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
});
