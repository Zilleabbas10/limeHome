import React from "react";
import { Button, Text, View } from "react-native";
import NavigationService from "../Services/NavigationService";

const FavouriteScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>FavouriteScreen</Text>
      <Button
        title="Details"
        onPress={() => NavigationService.navigate("Details")}
      />
    </View>
  );
};

export default FavouriteScreen;