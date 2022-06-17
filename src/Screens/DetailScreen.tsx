import React from "react";
import { Text, View } from "react-native";
import {
  AppText,
  CrossButton,
  DetailsFooter,
  Divider,
  Heading,
  IconWithText,
  ImageCarousel,
  RoomTypesSection,
  ScreenContainer,
} from "../Components";
import { HeadingWithFavourite } from "../Components";
import { Colors, Fonts, Metrics } from "../Themes";

const desc = `Our 32 sqm Junior Suites for long-term stays have a fully equipped kitchen with a small dining area, an excellent double bed (1.60 m), a bathroom with shower as well as high-speed Wi-Fi and smart TV.`;

const DetailScreen = () => {
  return (
    <ScreenContainer>
      <View style={{ height: Metrics.screenHeight }}>
        <CrossButton />
        <ImageCarousel />
        <View
          style={{
            paddingHorizontal: Metrics.screenHorizontalPadding / 2,
            paddingVertical: Metrics.doubleBaseMargin,
          }}
        >
          <HeadingWithFavourite />
          <IconWithText
            iconName="location-outline"
            text="6.3 km from city center"
          />
          <AppText
            style={{ paddingTop: Metrics.doubleBaseMargin - 5, lineHeight: 25 }}
            text={desc}
          />
          <Divider marginVertical={Metrics.doubleBaseMargin} />
          <RoomTypesSection />
        </View>

        <DetailsFooter />
      </View>
    </ScreenContainer>
  );
};

export default DetailScreen;
