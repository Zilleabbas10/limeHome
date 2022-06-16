import { StyleSheet, View } from "react-native";

import { PropertyTile } from "../Common";
import { Metrics } from "../../Themes";

const OverlayPropertyTile = () => {
  return (
    <View style={styles.container}>
      <PropertyTile />
    </View>
  );
};

export default OverlayPropertyTile;

const styles = StyleSheet.create({
  container: { position: "absolute", bottom: Metrics.screenWidth / 4 },
});
