import AsyncStorage from "@react-native-async-storage/async-storage";
import reactotron from "reactotron-react-native";

export const saveToken = async (key: string, token: string) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(token));
  } catch (e) {
    console.log("PutStorageClientFailed");
    __DEV__ && reactotron.log!(e);
  }
};

export const getToken = async (key: string) => {
  try {
    let keyValue = await AsyncStorage.getItem(key);
    return JSON.stringify(keyValue);
  } catch (e) {
    console.log("Failed to get Token");
    __DEV__ && reactotron.log!("GetTokenError", e);
  }
};

export const removeToken = async (tokenKey: string) => {
  try {
    await AsyncStorage.removeItem(tokenKey);
  } catch (e) {
    console.log("Failed to delete Token");
    __DEV__ && reactotron.log!("GetTokenError", e);
  }
};
