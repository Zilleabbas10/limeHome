import React, { useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PropertiesList } from "../Components";
import { useAppContext } from "../Contexts/AppContext";
import { APP_STATE } from "../enums";
import { Colors, Metrics } from "../Themes";
import { getLikedProperties, likeUnlikePropertiesInList } from "../Utils";

const FavouriteScreen = () => {
  const { AppState, AppDispatcher } = useAppContext();
  const { properties, likedProperties } = AppState;
  const likedPropertiesList = useMemo(
    () =>
      getLikedProperties({
        properties,
        likedProperties,
      }),
    [properties, likedProperties]
  );

  const likeUnlikeProperty = (id: string) => {
    const updatedLikedProperties = likeUnlikePropertiesInList({
      id,
      likedProperties,
    });
    AppDispatcher({
      type: APP_STATE.UPDATE_APP_CONTEXT,
      payload: { likedProperties: updatedLikedProperties },
    });
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <PropertiesList
        properties={likedPropertiesList}
        likeUnlikeProperty={(id) => likeUnlikeProperty(id)}
      />
    </SafeAreaView>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: Metrics.doubleBaseMargin,
    backgroundColor: Colors.secondary,
    marginTop: Metrics.baseMargin,
  },
});
