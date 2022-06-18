import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Colors, Metrics } from "../../Themes";
import { Ionicons } from "@expo/vector-icons";

import Input from "./Input";
import { APP_CONSTANTS } from "../../Constants";

type SearchBarType = {
  searchValue: string;
  setSearchValue(val: any): void;
};
const SearchBar = ({
  searchValue = "",
  setSearchValue = () => {},
}: SearchBarType) => {
  const [isInputActive, setInputActive] = useState<boolean>(false);
  const searchIconColor = isInputActive
    ? Colors.secondaryText
    : Colors.chevronBtnbgColor;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchIconContainer}>
          <Ionicons
            name="search"
            color={searchIconColor}
            size={Metrics.doubleBaseMargin}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={setSearchValue}
            value={searchValue}
            placeholder={`Search properties`}
            onFocus={() => setInputActive(true)}
            onBlur={() => setInputActive(false)}
            placeholderTextColor={Colors.chevronBtnbgColor}
            selectionColor={Colors.primaryText}
          />
        </View>
      </View>
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginBottom: Metrics.section,
    height: 50,
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: Metrics.section,
    paddingHorizontal: Metrics.doubleBaseMargin,
    marginTop: Metrics.doubleBaseMargin,
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  searchIconContainer: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
    justifyContent: "center",
    paddingTop: APP_CONSTANTS.IS_ANDROID ? Metrics.baseMargin : 3,
  },
});
