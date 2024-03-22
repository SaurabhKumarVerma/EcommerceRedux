import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon } from "../../../App";

interface IIconpack {
  name: string;
  size?: number;
  color?: string;
  onClick?: () => void;
}
const Iconpack = (props: IIconpack) => {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <Icon
        name={props.name}
        size={props.size || 24}
        color={props.color || "#000000"}
      />
    </TouchableOpacity>
  );
};

export default Iconpack;

const styles = StyleSheet.create({});
