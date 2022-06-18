import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MapStack from "./Stacks/MapStack";
import SearchScreen from "../Screens/SearchScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import FavouriteScreen from "../Screens/FavouriteScreen";

import { useAppContext } from "../Contexts/AppContext";

import { Colors, Metrics } from "../Themes";

const TABS = [
  {
    name: "Search",
    component: SearchScreen,
    label: "Search",
    iconName: "search",
  },
  {
    name: "MapStack",
    component: MapStack,
    label: "Map",
    iconName: "map",
  },
  {
    name: "Favourite",
    component: FavouriteScreen,
    label: "Saved",
    iconName: "heart-outline",
  },
  {
    name: "Profile",
    component: ProfileScreen,
    label: "Profile",
    iconName: "person-circle-outline",
  },
];

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  const { AppState } = useAppContext();
  const { isTabBarVisible } = AppState;
  const display = isTabBarVisible ? "flex" : "none";
  return (
    <Tab.Navigator
      initialRouteName="MapStack"
      screenOptions={{
        tabBarStyle: {
          display,
          ...styles.tabBarStyles,
        },
        headerShown: false,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.white,
        tabBarActiveBackgroundColor: Colors.primaryDisabled,
        tabBarLabelStyle: { paddingBottom: Metrics.smallMargin },
        tabBarHideOnKeyboard: true,
      }}
    >
      {TABS.map((tab, index) => (
        <Tab.Screen
          key={index.toString()}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarLabel: tab.label,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.iconName as any} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  tabBarStyles: {
    height: Metrics.bottomtabsHeight,
    position: "absolute",
    backgroundColor: Colors.primary,
    borderTopLeftRadius: Metrics.doubleBaseMargin - Metrics.smallMargin,
    borderTopRightRadius: Metrics.doubleBaseMargin - Metrics.smallMargin,
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin + Metrics.smallMargin,
    paddingHorizontal: Metrics.baseMargin,
  },
});
