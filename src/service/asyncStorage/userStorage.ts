import reactotron from "reactotron-react-native";
import { IUser } from "../../types/types";
import { getToken, removeToken, saveToken } from "./storage";

class ECommerceAsyncStore {
  private ACCESS_TOKEN_KEY = "TOKEN_KEY";
  private REFRESH_TOKEN_KEY = "REFRESH_TOKEN_KEY";

  async saveUserToken(token: string) {
    try {
      let tokenValue = JSON.stringify(token);
      await saveToken(this.ACCESS_TOKEN_KEY, token);
    } catch (e) {
      console.error("Error on saving user access data");
      __DEV__ && reactotron.log!("ECommerceAsyncStore", e);
    }
  }

  async getAccessToken() {
    let accessToken;
    try {
      accessToken = await getToken(this.ACCESS_TOKEN_KEY);
      if (accessToken !== null) {
        return accessToken;
      } else {
        return null;
      }
    } catch (e) {
      console.error("Error on getting user data");
      __DEV__ && reactotron.log!("ECommerceAsyncStore getting Access Token", e);
    }

    return accessToken;
  }

  async removeUserToken() {
    try {
      console.log("Clear user data ......");
      await removeToken(this.ACCESS_TOKEN_KEY);
    } catch (e) {
      console.error("Error on removing user data");
      __DEV__ && reactotron.log!("ECommerceAsyncStore removing  Token", e);
    }
  }
}

export default new ECommerceAsyncStore();
