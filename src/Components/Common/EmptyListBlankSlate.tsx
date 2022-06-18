import React from "react";
import { StyleSheet, View } from "react-native";
import { useAppContext } from "../../Contexts/AppContext";
import { Fonts, Metrics } from "../../Themes";
import AppText from "./AppText";

const EmptyListBlankSlate = () => {
  const { AppState } = useAppContext();
  const { properties, likedProperties } = AppState;
  const message =
    properties.length > 0
      ? likedProperties.length > 0
        ? "No Results Found.."
        : "Please Like your properties from search screen to view them. Thanks"
      : "No Properties Found..";
  return (
    <View style={styles.emptyBlankListContainer}>
      <AppText
        fontSize={Fonts.size.h3}
        style={{ textAlign: "center", paddingTop: Metrics.section }}
        text={message}
      />
    </View>
  );
};

export default EmptyListBlankSlate;

const styles = StyleSheet.create({
  emptyBlankListContainer: {
    height: Metrics.screenHeight - Metrics.bottomtabsHeight,
    width: Metrics.screenWidth - Metrics.screenHorizontalPadding * 2,
    justifyContent: "center",
    paddingBottom: Metrics.bottomtabsHeight,
    alignItems: "center",
  },
});
