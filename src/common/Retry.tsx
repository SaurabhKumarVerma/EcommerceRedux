import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Lottie from "./Lottie";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { colors } from "../constent/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { setNetworkStatus } from "../redux/slices/NetworkSlice";
import { RootState } from "../redux/store";
import { StatusBar } from "expo-status-bar";

const Retry = () => {
  const dispatch = useAppDispatch();
  const network = useAppSelector((state: RootState) => state.network);
  const { width } = useWindowDimensions();

  const checkNetworkAvailble = () => {
    dispatch(setNetworkStatus());
  };

  const networkCheck = () => {
    if (!network.isConnected) {
      return (
        <View>
          <Lottie path={require("../../assets/lottie/splash/nonetwork.json")} />

          <TouchableOpacity
            onPress={() => checkNetworkAvailble()}
            style={{
              position: "absolute",
              overflow: "visible",
              backgroundColor: colors.black,
              width: width - 32,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              marginHorizontal: 20,
              borderRadius: 20,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Text
              style={{
                color: colors.white,
                padding: 20,
                fontSize: 20,
                fontWeight: "700",
              }}
            >
              Retry
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };
  return (
    <View>
      <StatusBar style="auto" animated hidden />
      {networkCheck()}
    </View>
  );
};

export default Retry;

const styles = StyleSheet.create({});
