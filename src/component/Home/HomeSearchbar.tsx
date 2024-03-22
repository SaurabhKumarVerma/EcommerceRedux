import {
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Iconpack from "../../common/Icon/Icon";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constent/theme";

const HomeSearchbar = () => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.searchBar}>
        <View style={{ marginLeft: 18 }}>
          <Ionicons name="search" size={28} />
        </View>
        <View>
          <TextInput
            placeholder="Search..."
            style={{
              height: 50,
              marginLeft: 16,
              width: width - 180,
            }}
          />
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.black,
          width: 38,
          height: 38,
          borderRadius: 19,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          flexDirection: "row",
        }}
      >
        <Ionicons
          name="filter"
          size={20}
          color={colors.white}
          style={{
            alignSelf: "center",
          }}
        />
      </View>
    </View>
  );
};

export default HomeSearchbar;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: colors.aliceBlue,
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    borderRadius: 22,
    width: "80%",
  },
});
