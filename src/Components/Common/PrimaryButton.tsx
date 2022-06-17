import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import IconWithText from "./IconWithText";
import { Colors, Fonts, Metrics } from "../../Themes";

type PrimaryButtonType = {
  onPressHandler(): void;
  btnLabel: string;
};
const PrimaryButton = ({
  onPressHandler = () => {},
  btnLabel = "",
}: PrimaryButtonType) => {
  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.container}>
      <IconWithText
        iconName="md-arrow-forward"
        text={btnLabel}
        iconSize={Fonts.size.regular}
        iconColor={Colors.white}
        textStyle={{
          fontWeight: "400",
          color: Colors.white,
          fontSize: Fonts.size.small,
          letterSpacing: 2,
        }}
        prefixIcon={false}
        marginBetween={0}
      />
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Metrics.doubleBaseMargin,
    paddingVertical: Metrics.baseMargin + 2,
    borderRadius: Metrics.smallMargin - 2,
  },
});
