import { View } from "react-native";
import { Colors, Metrics } from "../../Themes";

type DividerType = {
  height?: number;
  backgroundColor?: string;
  marginVertical?: number;
};
const Divider = ({
  height = 0.5,
  backgroundColor = Colors.divider,
  marginVertical = Metrics.baseMargin,
}: DividerType) => {
  return (
    <View
      style={{
        height,
        backgroundColor,
        marginVertical,
      }}
    />
  );
};

export default Divider;
