import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { APP_CONSTANTS } from "../../Constants";
import { Metrics } from "../../Themes";
import { PropertyType } from "../../types";
import EmptyListBlankSlate from "./EmptyListBlankSlate";
import PropertyTile from "./PropertyTile";

type PropertiesListType = {
  properties: PropertyType[];
  likeUnlikeProperty?(id: string): void;
};
const PropertiesList = ({
  properties,
  likeUnlikeProperty = () => {},
}: PropertiesListType) => {
  return (
    <FlatList
      data={properties}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listStyles}
      renderItem={({ item, index }) => (
        <View style={styles.propertyTileContainer}>
          <PropertyTile
            key={index.toString()}
            property={item}
            showFavouriteIcon
            likeUnlikeProperty={likeUnlikeProperty}
          />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      ListEmptyComponent={<EmptyListBlankSlate />}
    />
  );
};

export default PropertiesList;

const styles = StyleSheet.create({
  propertyTileContainer: {
    marginVertical: Metrics.baseMargin,
  },
  listStyles: {
    paddingBottom: APP_CONSTANTS.IS_ANDROID
      ? Metrics.bottomtabsHeight + Metrics.baseMargin
      : Metrics.section * 3 - Metrics.baseMargin,
  },
});
