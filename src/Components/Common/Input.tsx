import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { APP_CONSTANTS } from "../../Constants";
import { Colors, Fonts, Metrics } from "../../Themes";

type InputType = {
  value: string;
  onChangeText(value: any): void;
  onFocus?(): void;
  onBlur?(): void;
  placeholderTextColor: string;
  selectionColor: string;
  placeholder: string;
};
const Input = (props: InputType) => {
  return <TextInput style={styles.input} {...props} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    color: Colors.primaryText,
    fontsize: Fonts.size.medium,
    paddingLeft: Metrics.baseMargin,
    paddingBottom: APP_CONSTANTS.IS_ANDROID ? Metrics.smallMargin + 2 : 0,
  },
});
