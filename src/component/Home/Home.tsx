import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import HomeHeader from "./HomeHeader";
import HomeSearchbar from "./HomeSearchbar";
import CustomImageCarousal from "../Carousal/CustomImageCarousal";
import { image } from "../../../assets/images";
import HomeNewArrival from "./HomeNewArrival";
import WelcomeText from "./WelcomeText";
import Config from "react-native-config";
import { product } from "../../redux/slices/ProductSlice";
import { RootState } from "../../redux/store";
import ECommHoc from "../../common/ECommHOC";
import { StatusBar } from "expo-status-bar";
const Home = () => {
  const dispatch = useAppDispatch();
  const { height } = useWindowDimensions();

  useEffect(() => {
    dispatch(product());
  }, []);

  const data = [
    {
      image: image.handbag,
      discountPrice: 50,
      promoOffer: "FSCREATION",
    },
    {
      image: image.watch,
      discountPrice: 40,
      promoOffer: "WEDRTFWWS4",
    },
    {
      image: image.handbag,
      discountPrice: 30,
      promoOffer: "QWEDERT4F",
    },
    {
      image: image.watch,
      discountPrice: 80,
      promoOffer: "MLOKDEDHUFJ",
    },
    {
      image: image.handbag,
      discountPrice: 70,
      promoOffer: "ERTFRG5R",
    },
    {
      image: image.watch,
      discountPrice: 60,
      promoOffer: "234DSDCJYU#",
    },
  ];
  return (
    <ScrollView style={{}} showsVerticalScrollIndicator={false}>
      <StatusBar hidden hideTransitionAnimation="fade" animated />
      <View style={{ marginHorizontal: 16, marginTop: 40 }}>
        <HomeHeader />
      </View>

      <View style={{ marginHorizontal: 16, marginTop: 30 }}>
        <WelcomeText />
      </View>

      <View style={{ marginTop: 30, marginHorizontal: 16 }}>
        <HomeSearchbar />
      </View>
      <View style={{ marginTop: 28 }}>
        <CustomImageCarousal data={data} autoPlay={true} pagination={true} />
      </View>
      <View
        style={{ marginHorizontal: 16, marginTop: 20, marginBottom: "20%" }}
      >
        <HomeNewArrival />
      </View>
    </ScrollView>
  );
};

const HomePage = ECommHoc(Home);
export default HomePage;
const styles = StyleSheet.create({});
