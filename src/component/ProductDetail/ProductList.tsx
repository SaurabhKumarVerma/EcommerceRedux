import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { IProduct } from "../../types/types";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../constent/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import EcomHeader from "../../common/EcomHeader";
import FastImage from "react-native-fast-image";

const AnimatedPressable = Animated.createAnimatedComponent(TouchableOpacity);

const ProductList = (props) => {
  const { route } = props;
  const productData = useAppSelector((state) => state.product);
  const navigation = useNavigation();
  const inset = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  const renderProductList = (item: IProduct, index: number) => {
    return (
      <AnimatedPressable
        onPress={() => navigation.navigate("ProductDetail", { item: item })}
        entering={FadeInLeft.delay(180 * index + 1)}
        style={{ marginVertical: 10 }}
      >
        <View style={styles.cardContainer}>
          <FastImage
            source={{ uri: item.image }}
            style={{ width: 80, height: 80, borderRadius: 20 }}
          />
          <View style={{}}>
            <Animated.Text style={[styles.heading, { width: width * 0.55 }]}>
              {item.title}
            </Animated.Text>

            <Animated.Text
              numberOfLines={2}
              style={[styles.paragraph, { width: width * 0.55 }]}
            >
              {item.title}
            </Animated.Text>

            <Animated.Text
              style={{
                fontSize: 14,
                marginLeft: 20,
                fontWeight: "600",
                marginTop: 10,
              }}
            >
              ${item.price}
            </Animated.Text>
          </View>
        </View>
      </AnimatedPressable>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#E5E5E5", height: height }}>
      <View>
        <EcomHeader iconName={"cart-outline"} />
      </View>

      <Animated.View>
        <FlatList
          data={productData.productsList}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item, index }) => renderProductList(item, index)}
          style={{ marginTop: 20, marginHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  btnContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  cardContainer: {
    backgroundColor: colors.gainsboro,
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
  heading: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 8,
    // color: "green",
    alignItems: "center",
    marginLeft: 20,
  },
  paragraph: {
    fontSize: 17,
    lineHeight: 24,
    marginHorizontal: 20,
    marginLeft: 20,
    color: colors.gray,
  },
});
