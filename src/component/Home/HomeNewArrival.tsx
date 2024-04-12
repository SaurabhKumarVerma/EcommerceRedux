import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { colors, sizes } from "../../constent/theme";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { product } from "../../redux/slices/ProductSlice";
import { IProduct } from "../../types/types";
import Card from "../../common/Card/Card";
import CardFavoriteIcon from "../../common/Card/CardFavoriteIcon";
import { SharedElement } from "react-navigation-shared-element";
import CardMedia from "../../common/Card/CardMedia";
import { image } from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";
import { SharedElementStackParamList } from "../../navigation/SharedElementNavigator";

const CARD_HEIGHT = 200;
const HomeNewArrival = () => {
  const productData = useAppSelector((state) => state.product);
  const { navigate } = useNavigation<SharedElementStackParamList>();
  const renderItem = (item, index) => {
    return (
      <View
        style={{ paddingHorizontal: 8, paddingVertical: 10 }}
        // onPress={}
      >
        <Card
          style={styles.card}
          shadowType="dark"
          onPress={() => navigate("ProductDetail", { item: item })}
        >
          <SharedElement
            id={`trip.${item}.image`}
            style={[StyleSheet.absoluteFillObject, { height: 120 }]}
          >
            <CardMedia source={item.image} />
          </SharedElement>
          {/* <View
            style={{
              backgroundColor: colors.black,
              width: 20,
              height: 20,
              borderRadius: 10,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
              margin: 16,
            }}
          >
            <CardFavoriteIcon active={false} onPress={() => {}} style={{}} />
          </View> */}
          <View style={styles.titleBox}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "900",
                  textAlign: "center",
                  marginTop: 6,
                }}
              >
                ${item.price}
              </Text>
            </View>
          </View>
        </Card>
      </View>
    );
  };

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "800", fontSize: 18 }}>New Arrival</Text>
        <TouchableOpacity
          onPress={() =>
            navigate("ProductList", { item: productData.productsList })
          }
        >
          <Text style={{ fontWeight: "600", fontSize: 16, color: colors.gray }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginBottom: 20 }}>
        <FlatList
          data={productData.productsList.slice(0, 5)}
          renderItem={({ item, index }) => renderItem(item, index)}
          horizontal
          style={{ paddingTop: 16 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeNewArrival;
const styles = StyleSheet.create({
  card: {
    height: CARD_HEIGHT,
  },
  titleBox: {
    position: "absolute",
    top: CARD_HEIGHT - 60,
    left: 16,
    width: 160,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.black,
  },
  location: {
    fontSize: sizes.h3,
    color: colors.white,
  },
});
