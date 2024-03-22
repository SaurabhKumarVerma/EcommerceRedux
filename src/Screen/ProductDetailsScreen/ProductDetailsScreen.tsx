import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductDetails from "../../component/ProductDetail/ProductDetails";

interface IProductDetailsScreen {}
const ProductDetailsScreen = (props: IProductDetailsScreen) => {
  return (
    <View style={{ flex: 1 }}>
      <ProductDetails route={props?.route?.params} />
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
