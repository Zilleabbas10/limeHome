import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText, PrimaryButton } from "../Common";

import { Colors, Fonts, Metrics } from "../../Themes";
import AppConstants from "../../Constants/AppConstants";

const DetailsFooter = () => {
  return (
    <View style={styles.container}>
      <AppText fontSize={Fonts.size.small + 1} text="From">
        <AppText
          fontSize={Fonts.size.small + 1}
          color={Colors.secondaryText}
          text="55.00€/Night"
        />
      </AppText>
      <PrimaryButton
        btnLabel="EXPLORE"
        onPressHandler={() => alert("Button clicked")}
      />
    </View>
  );
};

export default DetailsFooter;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: Metrics.screenHorizontalPadding / 2,
    paddingTop: Metrics.baseMargin,
    paddingBottom: AppConstants.IS_ANDROID
      ? Metrics.baseMargin
      : Metrics.doubleBaseMargin,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
