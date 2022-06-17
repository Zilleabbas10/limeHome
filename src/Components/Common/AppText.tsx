import { Text } from "react-native";
import { Colors, Fonts } from "../../Themes";

type AppTextType = {
  color?: string;
  fontWeight?: "100" | "300" | "500" | "700" | "bold";
  fontSize?: number;
  text: string;
  children?: React.ReactElement;
  style?: object;
};
const AppText = ({
  color = Colors.primaryText,
  fontWeight = "300",
  fontSize = Fonts.size.extraSmall + 1,
  text = "",
  children,
  style,
}: AppTextType) => {
  return (
    <Text style={{ color, fontWeight, fontSize, ...style }}>
      {text} {children}
    </Text>
  );
};

export default AppText;
