import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Fonts, Metrics } from "../../Themes";

type HeadingProps = {
  title?: string;
  paddingBottom?: number;
  fontSize?: number;
};
const Heading = ({
  title = "Details",
  paddingBottom = Metrics.smallMargin,
  fontSize = Fonts.size.h1,
}: HeadingProps) => {
  return (
    <View style={[styles.container, { paddingBottom }]}>
      <Text style={[styles.text, { fontSize }]}>{title}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {},
  text: {
    color: Colors.primaryText,
    fontWeight: "600",
  },
});
