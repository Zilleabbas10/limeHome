import React, { useState } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

import MapMarker from "./MapMarker";

const MARKERS = [
  {
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    latitude: 52.51,
    longitude: 13.38,
  },
  {
    latitude: 52.53,
    longitude: 13.43,
  },
  {
    latitude: 52.54,
    longitude: 13.39,
  },
];

const Map = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 52.52,
    longitude: 13.405,
    latitudeDelta: 0.0722,
    longitudeDelta: 0.0021,
  });

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={mapRegion}
      >
        {MARKERS.map((marker, i) => (
          <MapMarker key={i.toString()} marker={marker} />
        ))}
      </MapView>
    </View>
  );
};

export default Map;
