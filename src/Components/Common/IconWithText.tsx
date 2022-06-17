import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "./AppText";
import { Colors, Fonts, Metrics } from "../../Themes";

type IconWithTextType = {
  iconName: any;
  iconColor?: string;
  iconSize?: number;
  text: string;
  prefixIcon?: boolean;
  marginBetween?: number;
  fontSize?: number;
  textStyle?: object;
};
const IconWithText = ({
  iconName = "location-outline",
  iconColor = Colors.secondaryText,
  iconSize = Metrics.doubleBaseMargin,
  prefixIcon = true,
  text = "",
  marginBetween = Metrics.smallMargin,
  fontSize = Fonts.size.extraSmall + 1,
  textStyle = {},
}: IconWithTextType) => {
  return (
    <View style={styles.container}>
      {prefixIcon && (
        <Ionicons name={iconName} color={iconColor} size={iconSize} />
      )}

      <AppText
        fontSize={fontSize}
        style={
          prefixIcon
            ? { paddingLeft: marginBetween, ...textStyle }
            : { paddingRight: marginBetween, ...textStyle }
        }
        text={text}
      />
      {!prefixIcon && (
        <Ionicons name={iconName} color={iconColor} size={iconSize} />
      )}
    </View>
  );
};

export default IconWithText;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
