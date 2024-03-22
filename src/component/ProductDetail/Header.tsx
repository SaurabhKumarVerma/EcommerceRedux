import { StyleSheet } from "react-native";
import React from "react";
import Animated, { FadeIn, FadeInLeft } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SharedElementStackParamList } from "../../navigation/SharedElementNavigator";
import Iconpack from "../../common/Icon/Icon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../constent/theme";

const AnimatedPressable = Animated.createAnimatedComponent(TouchableOpacity);
const Header = () => {
  const inset = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<SharedElementStackParamList>>();
  return (
    <Animated.View
      style={[styles.container, { top: inset.top }]}
      entering={(FadeIn.delay(500), FadeInLeft.delay(600))}
    >
      <AnimatedPressable
        style={{ backgroundColor: colors.black, borderRadius: 22 }}
        onPress={() => navigation.goBack()}
      >
        <Animated.View style={{ padding: 10 }} entering={FadeInLeft.delay(700)}>
          <Iconpack name="leftArrow" size={20} color={colors.white} />
        </Animated.View>
      </AnimatedPressable>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 20,
    right: 20,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chevron: {
    width: 44,
    height: 44,
  },
});
