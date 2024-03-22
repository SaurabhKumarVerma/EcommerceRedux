import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../constent/theme";

const WelcomeText = () => {
  return (
    <View>
      <Text style={{ color: colors.black, fontSize: 36, fontWeight: "900" }}>
        Welcome
      </Text>
      <Text
        style={{
          color: colors.gray,
          fontSize: 26,
          fontWeight: "400",
          marginTop: 10,
        }}
      >
        Mike
      </Text>
    </View>
  );
};

export default WelcomeText;

const styles = StyleSheet.create({});
