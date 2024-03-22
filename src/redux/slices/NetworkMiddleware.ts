import NetInfo from "@react-native-community/netinfo";
import { Middleware } from "redux";
import { setNetworkStatus } from "./NetworkSlice";

export const networkMiddleWare = (): Middleware => {
  return (store) => (next) => (action) => {
    const { dispatch } = store;
    if (action.type === "network/setNetworkStatus") {
      NetInfo.fetch().then((state) => {
        dispatch(setNetworkStatus(state.isConnected));
      });
    }
    return next(action);
  };
};
