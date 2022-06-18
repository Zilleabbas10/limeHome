import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PropertiesList, SearchBar } from "../Components";
import { useAppContext } from "../Contexts/AppContext";
import { APP_STATE } from "../enums";
import { Colors, Metrics } from "../Themes";
import { SearchScreenType } from "../types";
import { likeUnlikePropertiesInList, searchQueryInProperties } from "../Utils";

const SearchScreen = () => {
  const { AppState, AppDispatcher } = useAppContext();
  const [state, setState] = useState<SearchScreenType>({
    filteredProperties: [],
    searchString: "",
  });
  const { filteredProperties, searchString } = state;
  const { properties, likedProperties } = AppState;

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

  useEffect(() => {
    const filteredProperties = searchQueryInProperties({
      properties,
      text: searchString,
    });
    setState({ ...state, filteredProperties });
  }, [searchString]);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <SearchBar
        searchValue={searchString}
        setSearchValue={(text) => setState({ ...state, searchString: text })}
      />
      <PropertiesList
        properties={filteredProperties}
        likeUnlikeProperty={(id) => likeUnlikeProperty(id)}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: Metrics.doubleBaseMargin,
    backgroundColor: Colors.secondary,
  },
  propertyTileContainer: {
    marginVertical: Metrics.baseMargin,
  },
  listStyles: {
    paddingBottom: Metrics.doubleBaseMargin,
  },
});
