import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/slices/AuthSlices";

const Profile = () => {
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity
        style={{ marginTop: 30 }}
        onPress={() => dispatch(logout())}
      >
        <Text> Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
