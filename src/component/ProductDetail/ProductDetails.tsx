import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { RouteProp } from "@react-navigation/native";
import { SharedElementStackParamList } from "../../navigation/SharedElementNavigator";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
} from "react-native-reanimated";
import Header from "./Header";
import AnimateButton from "../../common/AnimateButton";
import Rating from "./Rating";

type DetailsScreenRouteProp = RouteProp<
  SharedElementStackParamList,
  "ProductDetail"
>;

interface IProductDetails {
  route: IProductDetails;
}

const ProductDetails = (props: IProductDetails) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Animated.ScrollView style={{ backgroundColor: "#E5E5E5", flex: 1 }}>
        <Header />
        <View>
          <View style={styles.container}>
            <Animated.Image
              sharedTransitionTag={props.route?.item.title}
              source={{ uri: props.route.item.image }}
              style={{
                width: width,
                height: width,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            />
            <Animated.View
              style={styles.textContainer}
              entering={FadeIn.delay(600)}
            >
              <Text style={styles.textName}>{props.route.item.category}</Text>
            </Animated.View>
          </View>
          <Animated.View
            entering={FadeInDown.delay(800)}
            style={{
              borderTopLeftRadius: 20,
              overflow: "hidden",
              marginTop: 12,
            }}
          >
            <Animated.Text
              entering={FadeInLeft.delay(900)}
              style={styles.textAbout}
            >
              Description
            </Animated.Text>

            <Animated.View entering={FadeInLeft.delay(700)}>
              <Rating productRating={props.route.item.rating} />
            </Animated.View>

            <Text style={styles.text}>{props.route.item.description}</Text>
          </Animated.View>
        </View>
      </Animated.ScrollView>
      <View style={{ backgroundColor: "#E5E5E5" }}>
        <AnimateButton price={props.route.item.price} />
      </View>
    </>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  textContainer: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    bottom: 10,
    left: 10,
    right: 10,
    padding: 16,
    borderRadius: 20,
  },
  textName: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  textLocation: {
    color: "white",
    fontSize: 16,
  },
  textAbout: {
    color: "#323232",
    fontSize: 28,
    fontWeight: "bold",
    margin: 10,
  },
  text: {
    color: "#323232",
    fontSize: 16,
    marginHorizontal: 10,
    textAlign: "justify",
    fontWeight: "600",
    lineHeight: 28,
    marginTop: 10,
  },
});
