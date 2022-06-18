import React, { useCallback, useEffect, useMemo } from "react";
import {
  Loader,
  MapView,
  OverlayPropertyTile,
  ScreenContainer,
} from "../Components";
import { If, Then, Else } from "react-if";
import { useAppContext } from "../Contexts/AppContext";
import { APP_STATE } from "../enums";
import { getPropertiesData } from "../Services";
import { PropertyType } from "../types";
import { getLocationMarkers } from "../Utils";

const MapScreen = () => {
  const { AppState, AppDispatcher } = useAppContext();
  const { properties, selectedProperty, loader } = AppState;
  const markers = useMemo(
    () => getLocationMarkers({ properties }),
    [properties]
  );

  const getProperties = useCallback(async () => {
    const properties = await getPropertiesData();
    AppDispatcher({
      type: APP_STATE.UPDATE_APP_CONTEXT,
      payload: { selectedProperty: properties[0], properties, loader: false },
    });
  }, []);

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <ScreenContainer>
      <If condition={!loader}>
        <Then>
          <MapView
            markers={markers}
            selectedMarker={selectedProperty as PropertyType}
          />
          <OverlayPropertyTile property={selectedProperty as PropertyType} />
        </Then>
        <Else>
          <Loader />
        </Else>
      </If>
    </ScreenContainer>
  );
};

export default MapScreen;
