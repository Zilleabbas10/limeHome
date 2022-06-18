import { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import MapScreen from "../../Screens/MapScreen";
import DetailScreen from "../../Screens/DetailScreen";
import { useAppContext } from "../../Contexts/AppContext";
import { APP_STATE } from "../../enums";

const Stack = createNativeStackNavigator();

const MapStack = ({ route }: any) => {
  const { AppState, AppDispatcher } = useAppContext();
  const { isTabBarVisible } = AppState;

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Details") {
      AppDispatcher({
        type: APP_STATE.UPDATE_APP_CONTEXT,
        payload: { isTabBarVisible: false },
      });
    } else {
      if (!isTabBarVisible)
        AppDispatcher({
          type: APP_STATE.UPDATE_APP_CONTEXT,
          payload: { isTabBarVisible: true },
        });
    }
  }, [route]);

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
