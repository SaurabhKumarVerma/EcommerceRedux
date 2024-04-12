import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React from "react";
import { colors } from "../constent/theme";
import { Ionicons } from "@expo/vector-icons";

interface ICustomTextInput extends TextInputProps {
  title: string;
  isError: boolean;
}

const CustomTextInput = (props: ICustomTextInput) => {
  const { title, isError, ...rest } = props;
  let iconName;
  let iconColor;
  let color;

  if (isError) {
    iconName = "close-sharp";
    iconColor = colors.white;
    color = colors.primary;
  } else {
    iconName = "checkmark-sharp";
    iconColor = colors.white;
    color = colors.primary;
  }

  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "700", paddingBottom: 10 }}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: colors.lightSliver,
            justifyContent: "space-between",
            flex: 1,
            // marginRight: 18,
          }}
        >
          <TextInput
            {...rest}
            style={{ fontSize: 18, fontWeight: "600", paddingLeft: 16 }}
          />
          <View
            style={{
              backgroundColor: color,
              width: 24,
              height: 24,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 16,
              marginBottom: 8,
            }}
          >
            <Ionicons name={iconName} size={20} color={iconColor} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({});
