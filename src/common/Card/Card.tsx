import React, { ReactElement } from "react";
import { View, StyleSheet, TouchableOpacity, ViewProps } from "react-native";
import { colors, shadow, sizes } from "../../constent/theme";

interface ICard {
  children: ReactElement;
  style: ViewProps;
  onPress: () => void;
  shadowType: "light" | "dark";
}
const Card = (props: ICard) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.card, props.style, shadow[props.shadowType]]}
    >
      <View style={styles.inner}>{props.children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    backgroundColor: colors.lightSliver,
    borderRadius: sizes.radius,
  },
  inner: {
    // width: "100%",
    // height: "100%",
  },
});

export default Card;
