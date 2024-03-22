import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { FadeIn } from "react-native-reanimated";

const RenderItem = () => {
  return (
    <Animated.View entering={FadeIn.delay(200 * 10)}>
      <Pressable>
        <Animated.Image />
      </Pressable>
    </Animated.View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({});
