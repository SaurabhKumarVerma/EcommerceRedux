import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StarRating from "react-native-star-rating";
import { TRating } from "../../types/types";
import { colors } from "../../constent/theme";

interface IRating {
  productRating: TRating;
}
const Rating = (props: IRating) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <StarRating
        disabled={false}
        maxStars={5}
        rating={props.productRating.rate}
        starSize={24}
        fullStarColor={colors.gold}
        halfStarColor={colors.gold}
        starStyle={{ marginHorizontal: 6 }}
      />
      <Text style={{ marginLeft: 12, fontSize: 18, fontWeight: "500" }}>
        ({props.productRating.rate}) Reviews
      </Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
