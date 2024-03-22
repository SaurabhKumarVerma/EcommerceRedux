import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { sizes } from "../../constent/theme";
import { AutoImage } from "../../component/Carousal/AutoImage";
import FastImage from "react-native-fast-image";
const CardMedia = ({ source, borderBottomRadius = false }) => {
  return (
    <View style={[styles.media]}>
      <FastImage
        resizeMode="cover"
        style={styles.image}
        source={{ uri: source }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  media: {
    flex: 1,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    overflow: "hidden",
  },
  image: {
    // width: "100%",
    resizeMode: "cover",
    aspectRatio: 1,
  },
  borderBottomRadius: {
    borderBottomLeftRadius: sizes.radius,
    borderBottomRightRadius: sizes.radius,
  },
});

export default CardMedia;
