import React from "react";
import { StyleSheet, View } from "react-native";

import { PropertyTile } from "../Common";
import { Metrics } from "../../Themes";
import { PropertyType } from "../../types";

type OverlayPropertyTileType = {
  property: PropertyType;
};
const OverlayPropertyTile = React.memo(
  ({ property }: OverlayPropertyTileType) => {
    return (
      <View style={styles.container}>
        <PropertyTile property={property} />
      </View>
    );
  }
);

export default OverlayPropertyTile;

const styles = StyleSheet.create({
  container: { position: "absolute", bottom: Metrics.screenWidth / 4 },
});
