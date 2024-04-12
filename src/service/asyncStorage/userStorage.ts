import reactotron from "reactotron-react-native";
import { IUser } from "../../types/types";
import { getToken, removeToken, saveToken } from "./storage";

class ECommerceAsyncStore {
  private ACCESS_TOKEN_KEY = "TOKEN_KEY";
  private REFRESH_TOKEN_KEY = "REFRESH_TOKEN_KEY";

  async saveUserToken(token: string) {
    try {
      await saveToken(this.ACCESS_TOKEN_KEY, token);
    } catch (e) {
      console.error("Error on saving user access data");
      __DEV__ && reactotron.log!("ECommerceAsyncStore", e);
    }
  }

  // async saveUserRefreshToken(key: string) {
  //   try {
  //     await saveToken(this.REFRESH_TOKEN_KEY, key);
  //   } catch (e) {
  //     console.error("Error on saving user refresh data");
  //     __DEV__ && reactotron.log!("ECommerceAsyncStore", e);
  //   }
  // }

  async getAccessToken() {
    let accessToken;
    // let refreshToken;
    try {
      accessToken = await getToken(this.ACCESS_TOKEN_KEY);
      //   refreshToken = await getToken(this.REFRESH_TOKEN_KEY);
    } catch (e) {
      console.error("Error on getting user data");
      __DEV__ && reactotron.log!("ECommerceAsyncStore getting Access Token", e);
    }

    return accessToken;
  }

  // async getUserRefreshToken() {
  //   let refreshToken;
  //   try {
  //     refreshToken = await getToken(this.REFRESH_TOKEN_KEY);
  //   } catch (e) {}

  //   return refreshToken;
  // }
  async removeUserToken() {
    try {
      console.log("Clear user data ......");
      await removeToken(this.ACCESS_TOKEN_KEY);
      await removeToken(this.REFRESH_TOKEN_KEY);
    } catch (e) {
      console.error("Error on removing user data");
      __DEV__ && reactotron.log!("ECommerceAsyncStore removing  Token", e);
    }
  }
}

export default new ECommerceAsyncStore();
