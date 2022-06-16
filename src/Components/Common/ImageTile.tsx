import React, { useState } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import { Colors } from "../../Themes";

type ImageTileType = {
  uri: string;
  height?: string | number;
  width?: string | number;
  resizeMode?: "stretch" | "contain";
  borderTopLeftRadius?: number;
  borderBottomLeftRadius?: number;
};
const ImageTile = ({
  uri = "",
  width = "100%",
  height = "100%",
  resizeMode = "stretch",
  borderTopLeftRadius = 10,
  borderBottomLeftRadius = 10,
}: ImageTileType) => {
  const [isLoaded, setImageLoaded] = useState(false);
  return (
    <View
      style={[
        styles.imageContainer,
        { borderTopLeftRadius, borderBottomLeftRadius },
      ]}
    >
      {!isLoaded && (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="small"
          color={Colors.primaryDisabled}
        />
      )}
      <Image
        style={[
          styles.image,
          { height, width, borderTopLeftRadius, borderBottomLeftRadius },
        ]}
        resizeMode={resizeMode}
        source={{
          uri,
        }}
        onLoad={() => setImageLoaded(true)}
      />
    </View>
  );
};

export default ImageTile;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    overlayColor: Colors.white,
  },
  activityIndicator: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
  },
});
