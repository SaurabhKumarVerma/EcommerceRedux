import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Loader from "../../common/Loader";
import MasonryList from "reanimated-masonry-list";
import { product } from "../../redux/slices/ProductSlice";
import { MasonryFlashList } from "@shopify/flash-list";
const MasonryListItem = () => {
  const product = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const randomBool = useMemo(() => Math.random() < 0.5, []);
  const isLoading = () => {
    if (product.isLoading) {
      return <Loader isVisible={product.isLoading} />;
    } else {
      return null;
    }
  };

  const renderItem = (item, index) => {
    let even = index % 2 === 0;
    return (
      <View
        style={{
          paddingTop: index === 1 ? 24 : 0,
          paddingLeft: !even ? 24 / 2 : 0,
          paddingRight: even ? 24 / 2 : 0,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            height: index % 3 === 0 ? 180 : 240,
            alignSelf: "stretch",
          }}
          resizeMode="cover"
        />
        <Text
          style={{
            marginTop: 8,
          }}
        >
          {item.category}
        </Text>
        {/* <Image
          source={{
            uri: item.image,
          }}
          style={{ width: 120, height: 180 }}
          resizeMode="stretch"
        /> */}
      </View>
    );
  };

  return (
    <View style={{ height: "100%" }}>
      {/* <Text>MasonryListItem</Text> */}
      {isLoading()}

      <MasonryList
        numColumns={2}
        loading={product.isLoading}
        data={product.productsList}
        containerStyle={{ paddingHorizontal: 24, alignSelf: "stretch" }}
        renderItem={({ item, i }) => renderItem(item, i)}
        style={{ height: "100%" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MasonryListItem;

const styles = StyleSheet.create({});
