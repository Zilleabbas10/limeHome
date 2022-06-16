import React from "react";
import { Button, Text, View } from "react-native";
import NavigationService from "../Services/NavigationService";

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile Screen</Text>
      <Button
        title="Details"
        onPress={() => NavigationService.navigate("Details")}
      />
    </View>
  );
};

export default ProfileScreen;
