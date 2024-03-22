import { Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import Lottie from "./Lottie";

interface ILoader {
  onClose?: () => void;
  isVisible: boolean;
}
const Loader = (props: ILoader) => {
  return (
    <Modal
      onDismiss={props.onClose}
      visible={props.isVisible}
      animationType="slide"
      style={{ opacity: 1 }}
      presentationStyle="fullScreen"
    >
      <Lottie path={require("../../assets/lottie/loading.json")} />
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({});
