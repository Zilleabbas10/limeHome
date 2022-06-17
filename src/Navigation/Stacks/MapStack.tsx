import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "../../Screens/MapScreen";
import DetailScreen from "../../Screens/DetailScreen";

const Stack = createNativeStackNavigator();
const MapStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Map"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{
          title: "",
          presentation: "fullScreenModal",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MapStack;
