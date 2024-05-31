import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SharedElementNavigator from "./SharedElementNavigator";
import Category from "../component/Category/Category";
import MyTabs from "./BottomNavigation";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawer from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Root"
        component={SharedElementNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
});
