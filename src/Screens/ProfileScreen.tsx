import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Fonts, Metrics } from "../Themes";
import { AppText } from "../Components";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons
        name="person-circle-outline"
        color={Colors.secondaryText}
        size={Metrics.bottomtabsHeight}
      />
      <View style={styles.textContainer}>
        <AppText
          fontSize={Fonts.size.h2}
          style={{ textAlign: "center", paddingTop: Metrics.section }}
          text="Your profile is under construction!!! Please come back later. Thanks"
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.secondary,
    paddingBottom: Metrics.bottomtabsHeight,
  },
  textContainer: {
    paddingHorizontal: Metrics.screenHorizontalPadding,
  },
});
