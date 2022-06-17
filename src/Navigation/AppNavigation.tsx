import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "../Screens/SearchScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import FavouriteScreen from "../Screens/FavouriteScreen";
import { Colors, Metrics } from "../Themes";
import MapStack from "./Stacks/MapStack";
import { useAppContext } from "../Contexts/AppContext";

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  const { AppState } = useAppContext();
  const { isTabBarVisible } = AppState;
  return (
    <Tab.Navigator
      initialRouteName="MapStack"
      screenOptions={{
        tabBarStyle: {
          height: Metrics.bottomtabsHeight,
          position: "absolute",
          display: isTabBarVisible ? "flex" : "none",
          backgroundColor: Colors.primary,
          borderTopLeftRadius: Metrics.doubleBaseMargin - Metrics.smallMargin,
          borderTopRightRadius: Metrics.doubleBaseMargin - Metrics.smallMargin,
          paddingTop: Metrics.baseMargin,
          paddingBottom: Metrics.baseMargin + Metrics.smallMargin,
          paddingHorizontal: Metrics.baseMargin,
        },
        headerShown: false,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.white,
        tabBarActiveBackgroundColor: Colors.primaryDisabled,
        tabBarLabelStyle: { paddingBottom: Metrics.smallMargin },
      }}
    >
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MapStack"
        component={MapStack}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarLabel: "Saved",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
