import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors, Fonts, Metrics } from "../../Themes";
import { Heading, IconWithText } from "../Common";

type HeadingWithFavouriteType = {
  headingTitle: string;
};
const HeadingWithFavourite = ({
  headingTitle = "",
}: HeadingWithFavouriteType) => {
  return (
    <View style={styles.container}>
      <Heading title={headingTitle} />
      <View style={styles.ratingContainer}>
        <IconWithText
          iconName="star"
          text="4.5"
          iconSize={Fonts.size.regular - 1}
          textStyle={{ fontWeight: "600", fontSize: Fonts.size.small + 2 }}
          prefixIcon={false}
          marginBetween={Metrics.smallMargin}
        />
      </View>
    </View>
  );
};

export default HeadingWithFavourite;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: Metrics.smallMargin,
  },
  ratingContainer: {
    paddingHorizontal: Metrics.baseMargin,
    borderColor: Colors.divider,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Metrics.smallMargin - 2,
  },
});
