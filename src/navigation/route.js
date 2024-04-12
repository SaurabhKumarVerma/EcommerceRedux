import { Ionicons } from "@expo/vector-icons";

export const routes = [
  {
    name: "Electronics",
    focusedRoute: "Electronics",
    title: "Electronics",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => (
      <Ionicons name="home" size={30} color={focused ? "#551E18" : "#000"} />
    ),
  },
  {
    name: "Jewelery",
    focusedRoute: "Jewelery",
    title: "Jewelery",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => (
      <Ionicons name="home" size={30} color={focused ? "#551E18" : "#000"} />
    ),
  },
  {
    name: "MenClothing",
    focusedRoute: "MenClothing",
    title: "Men Clothing",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => (
      <Ionicons name="home" size={30} color={focused ? "#551E18" : "#000"} />
    ),
  },
  {
    name: "WomenClothing",
    focusedRoute: "WomenClothing",
    title: "Women's Clothing",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => (
      <Ionicons name="home" size={30} color={focused ? "#551E18" : "#000"} />
    ),
  },
];
