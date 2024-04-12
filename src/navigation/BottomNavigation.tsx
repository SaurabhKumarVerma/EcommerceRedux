import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import CartScreen from "../Screen/CartScreen/CartScreen";
import NotificationScreen from "../Screen/NotificationScreen/NotificationScreen";
import ProfileScreen from "../Screen/ProfileScreen/ProfileScreen";
import CustomBottomTabBar from "./CustomBottomTabBar";
import { StatusBar } from "expo-status-bar";

export type BottomNavigatorParamList = {
  Home: undefined;
  Cart: undefined;
  Profile: undefined;
};

type Props = {};

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTabBar {...props} key={Math.random()} />;
};

function MyTabs() {
  const Tab = createBottomTabNavigator<BottomNavigatorParamList>();
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={CustomBottomTabs}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
