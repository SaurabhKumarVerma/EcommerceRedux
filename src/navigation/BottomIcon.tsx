import { StyleSheet } from "react-native";
import React from "react";
import { ERouteName } from "../types/types";
import { colors } from "../constent/theme";
import Animated, {
  Easing,
  FadeInDown,
  FadeInLeft,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

interface IBottomIcon {
  isFocused: boolean;
  routeName: string;
  index: number;
}

const BottomIcon = (props: IBottomIcon) => {
  const routeMap = {
    Home: ERouteName.HOME,
    Cart: ERouteName.CART,
    Notification: ERouteName.NOTIFICATION,
    Profile: ERouteName.PROFILE,
  };

  const routeName = (name: string) => {
    const defaultIconName = ERouteName.HOME;
    const iconName = routeMap[name];
    return iconName || defaultIconName;
  };

  return (
    <Animated.View>
      <Animated.View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.View
          entering={FadeInLeft.easing(Easing.inOut(Easing.ease))}
          style={[
            styles.container,
            { backgroundColor: props.isFocused ? colors.black : "transparent" },
          ]}
        >
          <Ionicons
            name={routeName(props.routeName)}
            size={18}
            color={props.isFocused ? colors.white : colors.gray}
            style={{ padding: 10 }}
          />
        </Animated.View>

        {props.isFocused ? (
          <Animated.View
            entering={FadeInDown.delay(300)}
            style={{
              backgroundColor: colors.gray,
              marginLeft: -20,
              overflow: "hidden",
              borderTopLeftRadius: 3,
              borderBottomLeftRadius: 3,
              borderTopRightRadius: 14,
              borderBottomRightRadius: 14,
              borderTopColor: "transparent",
            }}
          >
            <Animated.Text
              style={{
                color: colors.light,
                fontSize: 16,
                fontWeight: "700",
                padding: 8,
                paddingLeft: 24,
                overflow: "hidden",
              }}
              numberOfLines={1}
            >
              {props.routeName}
            </Animated.Text>
          </Animated.View>
        ) : null}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 1,
  },
});

export default BottomIcon;
