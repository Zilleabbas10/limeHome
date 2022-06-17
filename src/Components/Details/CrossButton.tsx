import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NavigationService from "../../Services/NavigationService";
import AppConstants from "../../Constants/AppConstants";
import { Colors, Metrics } from "../../Themes";

const CrossButton = () => {
  return (
    <TouchableOpacity
      onPress={() => NavigationService.goBackToPreviousScreen()}
      style={styles.container}
    >
      <Ionicons
        name="ios-close-outline"
        size={Metrics.section}
        color={Colors.primaryText}
      />
    </TouchableOpacity>
  );
};

export default CrossButton;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: Colors.secondaryTransparent,
    zIndex: 1,
    top: AppConstants.IS_ANDROID ? Metrics.section : Metrics.section * 2,
    left: 10,
    position: "absolute",
  },
});
