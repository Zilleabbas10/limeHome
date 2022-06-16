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
};
const IconWithText = ({
  iconName = "location-outline",
  iconColor = Colors.secondaryText,
  iconSize = Metrics.doubleBaseMargin,
  prefixIcon = true,
  text = "",
  marginBetween = Metrics.smallMargin,
  fontSize = Fonts.size.extraSmall + 1,
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
            ? { paddingLeft: marginBetween }
            : { paddingRight: marginBetween }
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
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});
