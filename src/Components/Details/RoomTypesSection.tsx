import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors, Fonts, Metrics } from "../../Themes";
import { AppText, Heading } from "../Common";

const DATA = [
  "3x1 Bedrooms suites",
  "4x2 Bedrooms suites",
  "2x3 Bedrooms suites",
];

type RoomTypeChipType = {
  item: string;
  index: number;
};
const RoomTypeChip = ({ item = "", index }: RoomTypeChipType) => {
  const marginLeft = index % 2 === 0 ? 0 : Metrics.smallMargin + 1;
  return (
    <View style={[styles.chip, { marginLeft }]}>
      <AppText fontSize={Fonts.size.small} text={item} />
    </View>
  );
};

const RoomTypesSection = () => {
  return (
    <View>
      <Heading title="Room types available in this location" />
      <View style={styles.chipContainer}>
        {DATA.map((item, index) => (
          <RoomTypeChip key={index.toString()} item={item} index={index} />
        ))}
      </View>
    </View>
  );
};

export default RoomTypesSection;

const styles = StyleSheet.create({
  container: {},
  chipContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: Metrics.smallMargin,
  },
  chip: {
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: Metrics.smallMargin,
    paddingVertical: Metrics.smallMargin,
    borderRadius: Metrics.smallMargin - 2,
    marginVertical: Metrics.smallMargin - 2,
  },
});
