import { Modal, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Lottie from "../../common/Lottie";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { onStopSplash } from "../../redux/slices/OnboardingSlice";

const Onboarding = () => {
  const status = useAppSelector((state) => state.onboardingSlice);
  const dispatch = useAppDispatch();

  const startSplash = () => (dispatch) => {
    return setTimeout(() => {
      dispatch(onStopSplash());
    }, 5000);
  };
  useEffect(() => {
    dispatch(startSplash());
  }, []);

  return (
    <Modal
      visible={status.isVisible}
      style={{ opacity: 1, backgroundColor: "#E5E5E5" }}
      presentationStyle="fullScreen"
    >
      <Lottie
        speed={0.4}
        path={require("../../../assets/lottie/splash/splash.json")}
      />
    </Modal>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
