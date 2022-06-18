import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Colors } from "../../Themes";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        style={styles.activityIndicator}
        size="large"
        color={Colors.primary}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    overlayColor: "transparent",
  },
  activityIndicator: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
  },
});
