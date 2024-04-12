import { StyleSheet, Image, View, Text } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import { colors } from "../../constent/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AutoImage } from "./AutoImage";
const CustomImage = ({ item, x, index, size, spacer }) => {
  const [aspectRatio, setAspectRatio] = useState(1);

  // Get Image Width and Height to Calculate AspectRatio
  useLayoutEffect(() => {
    if (item.image) {
      const { width, height } = Image.resolveAssetSource(item.image);
      setAspectRatio(width / height);
    }
  }, [item.image]);

  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [(index - 2) * size, (index - 1) * size, index * size],
      [0.8, 1, 0.8]
    );
    return {
      transform: [{ scale }],
    };
  });

  if (!item.image) {
    return <View style={{ width: spacer }} key={index} />;
  }
  return (
    <View style={{ width: size }} key={index}>
      <Animated.View style={[styles.imageContainer, style]}>
        <AutoImage
          source={item.image}
          imgStyle={[styles.image, { aspectRatio: aspectRatio }]}
        />
        <Animated.View
          style={{ position: "absolute", marginTop: 18, marginLeft: 16 }}
        >
          <Text style={{ fontWeight: "700", fontSize: 25 }}>
            {item.discountPrice}% Off
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 16, marginTop: 20 }}>
            On everything today
          </Text>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 11,
              marginTop: 10,
              color: colors.lightGray,
            }}
          >
            With code:{item.promoOffer}
          </Text>
          <TouchableOpacity
            style={{
              width: 70,
              borderRadius: 16,
              backgroundColor: colors.black,
              marginTop: 18,
            }}
          >
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 20,
                fontSize: 12,
                fontWeight: "700",
                color: colors.white,
                textAlign: "center",
              }}
            >
              Get Now
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 34,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: undefined,
  },
});
