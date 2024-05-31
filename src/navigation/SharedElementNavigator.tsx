import React, { useEffect, useState } from "react";
import ProductDetailsScreen from "../Screen/ProductDetailsScreen/ProductDetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "../component/ProductDetail/ProductList";
import MyTabs from "./BottomNavigation";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import ECommerceAsyncStore from "../service/asyncStorage/userStorage";
import { getToken } from "../service/asyncStorage/storage";
export type SharedElementStackParamList = {
  HomeTab: undefined;
};

const Stack = createNativeStackNavigator();

function SharedElementNavigator() {
  const userData = useAppSelector((state: RootState) => state.auth);
  const [userToken, setToken] = useState(null);

  useEffect(() => {
    // getUserToken();
    token();
  }, []);
  // saveToken("@authKey", data);
  const token = async () => {
    // let ut = await getToken("@authKey")
    //   .then((response) => {
    //     console.log("====================================");
    //     console.log("qwerdhdhhhry", response);
    //     console.log("====================================");
    //     return JSON.stringify(response);
    //   })
    //   .catch((error) => {
    //     console.log("====================================");
    //     console.log(error);
    //     console.log("====================================");
    //   });
    // console.log("====================================");
    // console.log("qwerry", ut);
    // console.log("====================================");
  };

  // console.log("====================================");
  // console.log("userData.isTokenAvailable", userData.isTokenAvailable);
  // console.log("====================================");

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      {/* {userData.isTokenAvailable === null && (
       
      )} */}

      <>
        <Stack.Screen
          name="HomeTab"
          component={MyTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailsScreen}
          options={{}}
        />
        <Stack.Screen name="ProductList" component={ProductList} />
      </>
    </Stack.Navigator>
  );
}

export default SharedElementNavigator;
