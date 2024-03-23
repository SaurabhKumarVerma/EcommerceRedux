import { StyleSheet, View, Pressable, useWindowDimensions } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { colors } from "../constent/theme";
import BottomIcon from "./BottomIcon";
const CustomBottomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { width } = useWindowDimensions();
  const MARGIN = 0;
  return (
    <View style={[styles.container, { width: width, bottom: MARGIN }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
            }}
          >
            <View style={[styles.content, { borderRadius: 24 }]}>
              <BottomIcon
                isFocused={isFocused}
                routeName={route.name}
                index={state.index}
              />
            </View>
          </Pressable>
        );
      })}
    </View>
    // </Shadow>
  );
};

export default CustomBottomTabBar;
// "#E5E5E5"
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: colors.white,
    position: "absolute",
    height: 90,
    // width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    overflow: "hidden",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
