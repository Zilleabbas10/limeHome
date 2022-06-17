import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import NavigationService from "../../Services/NavigationService";
import { Colors, Fonts, Metrics } from "../../Themes";
import AppText from "./AppText";
import Divider from "./Divider";
import Heading from "./Heading";
import IconWithText from "./IconWithText";
import ImageTile from "./ImageTile";

const PropertyTile = () => {
  return (
    <TouchableOpacity
      onPress={() => NavigationService.navigate("Details")}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <ImageTile uri="https://limehome.imgix.net/properties/152/bff791de-57fa-450b-869d-0a7bfac7a55c.jpg" />
        <View style={styles.ratingContainer}>
          <IconWithText
            iconName="star"
            text="4.5"
            iconSize={Fonts.size.tiny + 2}
            prefixIcon={false}
            marginBetween={2}
            fontSize={Fonts.size.tiny + 1}
          />
        </View>
      </View>
      <View style={styles.dataContainer}>
        <Heading fontSize={Fonts.size.h3} title="Flower's Berlin" />
        <IconWithText
          iconName="location-outline"
          text="6.3 km from city center"
        />
        <Divider />
        <AppText text="From">
          <AppText fontWeight="500" color={Colors.secondaryText} text="55.00€">
            <AppText color={Colors.secondaryText} text="/Night"></AppText>
          </AppText>
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyTile;

const styles = StyleSheet.create({
  container: {
    height: Metrics.screenWidth / 3.5,
    flexDirection: "row",
    borderRadius: 10,
    marginHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.secondary,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  imageContainer: {
    width: "30%",
    borderRadius: Metrics.baseMargin,
  },
  ratingContainer: {
    position: "absolute",
    height: Metrics.doubleBaseMargin + 2,
    borderRadius: 2,
    backgroundColor: Colors.secondary,
    width: Metrics.section * 2,
    top: Metrics.smallMargin,
    right: Metrics.smallMargin + 2,
    justifyContent: "center",
    alignItems: "center",
  },
  dataContainer: {
    width: "70%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: Metrics.baseMargin + 5,
    paddingVertical: Metrics.baseMargin,
    justifyContent: "center",
  },
});
