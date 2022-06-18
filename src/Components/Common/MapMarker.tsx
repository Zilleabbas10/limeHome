import React, { useCallback, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Fonts, Metrics } from "../../Themes";
import { MarkerType } from "../../types";
import { APP_CONSTANTS } from "../../Constants";
import { useAppContext } from "../../Contexts/AppContext";
import { findPropertyById } from "../../Utils";
import { APP_STATE } from "../../enums";

type MapMarkerType = {
  marker: MarkerType;
};
const MapMarker = React.memo(({ marker }: MapMarkerType) => {
  const { AppState, AppDispatcher } = useAppContext();
  const { properties, selectedProperty } = AppState;
  const { location, perNightRate, id } = marker;
  const activeMarker = useMemo(
    () => selectedProperty?.id === id,
    [selectedProperty]
  );
  const bgColor = activeMarker
    ? Colors.selectedMarkerBGColor
    : Colors.primaryText;
  const borderRadius = activeMarker
    ? Metrics.baseMargin
    : Metrics.smallMargin - 2;

  const showPropertyTile = useCallback(() => {
    const property = findPropertyById({ properties, propertyId: id });
    AppDispatcher({
      type: APP_STATE.UPDATE_APP_CONTEXT,
      payload: { selectedProperty: property },
    });
  }, []);

  return (
    <Marker
      key={id.toString()}
      coordinate={location}
      onPress={() => showPropertyTile()}
    >
      <View
        style={[
          styles.markerContainer,
          { backgroundColor: bgColor, borderRadius },
        ]}
      >
        <Text style={styles.textStyle}>{perNightRate}€</Text>
        <Ionicons
          style={styles.iconStyle}
          name="caret-down-outline"
          color={bgColor}
          size={Metrics.doubleBaseMargin}
        />
      </View>
    </Marker>
  );
});

export default MapMarker;

const styles = StyleSheet.create({
  markerContainer: {
    position: "relative",
    height: Metrics.doubleBaseMargin * 2,
    width: Metrics.doubleBaseMargin * 2,
    justifyContent: "center",
    alignItems: "center",
    top: APP_CONSTANTS.IS_ANDROID ? 0 : -Metrics.baseMargin,
    marginBottom: APP_CONSTANTS.IS_ANDROID ? Metrics.baseMargin : 0,
  },
  textStyle: {
    color: Colors.white,
    fontSize: Fonts.size.extraSmall - 1,
  },
  iconStyle: {
    position: "absolute",
    zIndex: 1,
    bottom: -Metrics.baseMargin - 3,
  },
});
