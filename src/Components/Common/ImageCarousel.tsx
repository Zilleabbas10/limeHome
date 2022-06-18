import React, { useState } from "react";
import Carousel, {
  Pagination,
  ParallaxImage,
} from "react-native-snap-carousel";
import { View, StyleSheet, Platform } from "react-native";
import { Colors, Metrics } from "../../Themes";

type CarouselPaginationType = {
  slidesCount: number;
  activeSlideIndex: number;
};
const CarouselPagination = ({
  slidesCount,
  activeSlideIndex,
}: CarouselPaginationType) => {
  return (
    <Pagination
      dotsLength={slidesCount}
      activeDotIndex={activeSlideIndex}
      containerStyle={styles.paginationContainerStyle}
      dotStyle={styles.paginationDotStyle}
      inactiveDotStyle={{
        backgroundColor: Colors.white,
      }}
      inactiveDotOpacity={0.8}
      inactiveDotScale={1}
    />
  );
};

const RenderItem = ({ item }: any, parallaxProps: any) => {
  return (
    <View style={styles.item}>
      <ParallaxImage
        source={{ uri: item }}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
    </View>
  );
};

type ImageCarouselType = {
  images: string[];
};
const ImageCarousel = ({ images = [] }: ImageCarouselType) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Carousel
        autoplay
        loop
        autoplayDelay={800}
        sliderWidth={Metrics.screenWidth}
        sliderHeight={Metrics.screenHeight / 3}
        itemWidth={Metrics.screenWidth}
        onSnapToItem={(index) => setActiveSlideIndex(index)}
        data={images}
        //@ts-ignore
        renderItem={RenderItem}
        hasParallaxImages={true}
      />
      <CarouselPagination
        slidesCount={images.length}
        activeSlideIndex={activeSlideIndex}
      />
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  container: {},
  item: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight / 3,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: Colors.secondary,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  paginationContainerStyle: {
    position: "absolute",
    alignSelf: "center",
    bottom: -Metrics.baseMargin,
  },
  paginationDotStyle: {
    width: Metrics.baseMargin - 2,
    height: Metrics.baseMargin - 2,
    borderRadius: 100,
    marginHorizontal: -Metrics.smallMargin,
    backgroundColor: Colors.primary,
    borderWidth: 1.5,
    borderColor: Colors.white,
  },
});
