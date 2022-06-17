import React, { useRef, useState, useEffect } from "react";
import Carousel, {
  Pagination,
  ParallaxImage,
} from "react-native-snap-carousel";
import { View, StyleSheet, Platform } from "react-native";
import { Colors, Metrics } from "../../Themes";

const ENTRIES1 = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/UYiroysl.jpg",
  },
  {
    title: "Earlier this morning, NYC",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/UPrs1EWl.jpg",
  },
  {
    title: "White Pocket Sunset",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "https://i.imgur.com/MABUbpDl.jpg",
  },
  {
    title: "Acrocorinth, Greece",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/KZsmUi2l.jpg",
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/2nCt3Sbl.jpg",
  },
];

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
        source={{ uri: item.illustration }}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
    </View>
  );
};

const ImageCarousel = ({}) => {
  const [entries, setEntries] = useState<any>([]);
  const carouselRef = useRef<any>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        layout={"default"}
        autoplay
        loop
        autoplayDelay={800}
        ref={carouselRef}
        sliderWidth={Metrics.screenWidth}
        sliderHeight={Metrics.screenHeight / 3}
        itemWidth={Metrics.screenWidth}
        onSnapToItem={(index) => setActiveSlideIndex(index)}
        data={entries}
        //@ts-ignore
        renderItem={RenderItem}
        hasParallaxImages={true}
      />
      <CarouselPagination
        slidesCount={entries.length}
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
    backgroundColor: "white",
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
