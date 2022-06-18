import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { MarkerType, PropertyType } from "../../types";

import MapMarker from "./MapMarker";

type MapType = {
  markers: Array<MarkerType>;
  selectedMarker: PropertyType;
};
const Map = ({ markers = [], selectedMarker }: MapType) => {
  const {
    location: { longitude, latitude },
  } = selectedMarker;
  const REGION = {
    latitude,
    longitude,
    latitudeDelta: 0.111,
    longitudeDelta: 0.11,
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={REGION}
        minZoomLevel={2}
        maxZoomLevel={20}
      >
        {markers.map((marker, i) => (
          <MapMarker key={i.toString()} marker={marker} />
        ))}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    alignSelf: "stretch",
    height: "100%",
  },
});
