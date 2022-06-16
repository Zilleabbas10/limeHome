import React from "react";
import { MapView, OverlayPropertyTile, ScreenContainer } from "../Components";

const MapScreen = () => {
  return (
    <ScreenContainer>
      <>
        <MapView />
        <OverlayPropertyTile />
      </>
    </ScreenContainer>
  );
};

export default MapScreen;
