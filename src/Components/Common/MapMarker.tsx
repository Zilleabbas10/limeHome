import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Metrics } from "../../Themes";
import { MarkerType } from "../../types";
import { APP_CONSTANTS } from "../../Constants";

type MapMarkerType = {
  marker: MarkerType;
};
const MapMarker = ({ marker }: MapMarkerType) => {
  return (
    <Marker coordinate={marker} onPress={() => alert("hello")}>
      <View>
        <View style={styles.markerContainer}>
          <Text style={styles.textStyle}>65€</Text>
          <Ionicons
            style={styles.iconStyle}
            name="caret-down-outline"
            color={Colors.primary}
            size={22}
          />
        </View>
      </View>
    </Marker>
  );
};

export default MapMarker;

const styles = StyleSheet.create({
  markerContainer: {
    position: "relative",
    height: Metrics.doubleBaseMargin * 2,
    width: Metrics.doubleBaseMargin * 2,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Metrics.baseMargin,
    top: APP_CONSTANTS.IS_ANDROID ? 0 : -Metrics.baseMargin,
    marginBottom: APP_CONSTANTS.IS_ANDROID ? Metrics.baseMargin : 0,
  },
  textStyle: {
    color: Colors.white,
  },
  iconStyle: {
    position: "absolute",
    zIndex: 1,
    bottom: -Metrics.baseMargin - 3,
  },
});
