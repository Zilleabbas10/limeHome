import React from "react";
import { Else, If, Then } from "react-if";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NavigationService from "../../Services/NavigationService";

import AppText from "./AppText";
import Divider from "./Divider";
import Heading from "./Heading";
import IconWithText from "./IconWithText";
import ImageTile from "./ImageTile";

import { Colors, Fonts, Metrics } from "../../Themes";
import { PropertyType } from "../../types";
import { useAppContext } from "../../Contexts/AppContext";
import { APP_CONSTANTS } from "../../Constants";

type PropertyTileType = {
  property: PropertyType;
  showFavouriteIcon?: boolean;
  likeUnlikeProperty?(id: string): void;
};
const PropertyTile = ({
  property,
  showFavouriteIcon = false,
  likeUnlikeProperty = () => {},
}: PropertyTileType) => {
  const { AppState } = useAppContext();
  const { likedProperties } = AppState;
  const { title, id, imageUrl, perNightRate, distanceFromCity } = property;
  const isPropertyLiked = likedProperties.includes(id);
  const formattedTitle = title
    .slice(0, APP_CONSTANTS.IS_ANDROID ? 15 : 18)
    .concat("...");
  return (
    <View key={id.toString()}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          NavigationService.navigate("Details", { id, perNightRate })
        }
        style={styles.container}
      >
        <View style={styles.imageContainer}>
          <ImageTile uri={imageUrl} />
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
          <Heading fontSize={Fonts.size.h3 - 1} title={formattedTitle} />
          <IconWithText
            iconName="location-outline"
            text={`${distanceFromCity} km from city center`}
          />
          <Divider />
          <AppText text="From">
            <AppText
              fontWeight="500"
              color={Colors.secondaryText}
              text={`${perNightRate}.00€`}
            >
              <AppText color={Colors.secondaryText} text="/Night"></AppText>
            </AppText>
          </AppText>
        </View>
      </TouchableOpacity>
      <If condition={showFavouriteIcon}>
        <Then>
          <TouchableOpacity
            onPress={() => likeUnlikeProperty(id)}
            style={styles.likeUnlikeButtonContainer}
          >
            <If condition={isPropertyLiked}>
              <Then>
                <Ionicons
                  name="md-heart"
                  color={Colors.selectedMarkerBGColor}
                  size={Metrics.doubleBaseMargin}
                />
              </Then>
              <Else>
                <Ionicons
                  name="md-heart-outline"
                  color={Colors.selectedMarkerBGColor}
                  size={Metrics.doubleBaseMargin}
                />
              </Else>
            </If>
          </TouchableOpacity>
        </Then>
      </If>
    </View>
  );
};

export default PropertyTile;

const styles = StyleSheet.create({
  container: {
    height: Metrics.screenWidth / 3.5,
    flexDirection: "row",
    borderRadius: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.secondary,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: Metrics.smallMargin,
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
    borderTopRightRadius: Metrics.baseMargin,
    borderBottomRightRadius: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin + Metrics.smallMargin,
    paddingVertical: Metrics.baseMargin,
    justifyContent: "center",
  },
  likeUnlikeButtonContainer: {
    position: "absolute",
    bottom: Metrics.baseMargin,
    right: Metrics.section,
  },
});
