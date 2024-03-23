import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Cart from "../../component/Cart/Cart";

const CartScreen = () => {
  useEffect(() => {
    console.log("====================================");
    console.log("HELLO World");
    console.log("====================================");
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Cart />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
