import React from "react";
import { StyleSheet } from "react-native";
import { sizes, shadow, colors } from "../constent/theme";
import Iconpack from "./Icon/Icon";

const FavoriteButton = ({ active, style, onPress }) => {
  return (
    <Iconpack name="heart" onClick={onPress} color={colors.white} size={12} />
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    padding: 4,
    borderRadius: sizes.radius,
    ...shadow.light,
  },
});

export default FavoriteButton;
