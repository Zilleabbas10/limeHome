import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./Navigation/AppNavigation";
import NavigationService from "./Services/NavigationService";
import { Colors } from "./Themes";

export type StackActionsParamList = {
  name?: unknown | string;
  params?: unknown | object | undefined;
};

const App = () => {
  // const insets = useSafeAreaInsets();
  const navigationRef = React.useRef(
    useNavigationContainerRef<StackActionsParamList>()
  );
  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => NavigationService.setTopLevelNavigator(navigationRef)}
      >
        <StatusBar style="auto" />
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
