import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppContextProvider } from "./Contexts/AppContext";
import AppNavigation from "./Navigation/AppNavigation";
import NavigationService from "./Services/NavigationService";

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
        <AppContextProvider>
          <AppNavigation />
        </AppContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
