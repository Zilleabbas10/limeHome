import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { If, Then, Else } from "react-if";
import {
  AppText,
  CrossButton,
  DetailsFooter,
  Divider,
  IconWithText,
  ImageCarousel,
  Loader,
  RoomTypesSection,
  ScreenContainer,
} from "../Components";
import { HeadingWithFavourite } from "../Components";
import { APP_CONSTANTS } from "../Constants";
import { getPropertyDataById } from "../Services";
import { Metrics } from "../Themes";
import { DetailedPropertyType } from "../types";

const marginBottom = APP_CONSTANTS.IS_ANDROID
  ? Metrics.bottomtabsHeight - Metrics.screenHorizontalPadding / 2
  : Metrics.bottomtabsHeight - Metrics.baseMargin;
type DetailScreenType = {
  route: {
    params: { id: string; perNightRate: number };
  };
};
const DetailScreen = ({ route }: DetailScreenType) => {
  const { id, perNightRate } = route.params;
  const [state, setState] = useState<{
    property: DetailedPropertyType;
    loader: boolean;
  }>({
    property: {
      id: "",
      title: "",
      distanceFromCity: 0,
      images: [],
      description: "",
    },
    loader: true,
  });
  const { property, loader } = state;
  const { title, description, distanceFromCity, images } = property;

  const getPropertyById = useCallback(async () => {
    const property = await getPropertyDataById({ propertyId: id });
    setState({ ...state, property, loader: false });
  }, []);

  useEffect(() => {
    getPropertyById();
  }, []);

  return (
    <ScreenContainer>
      <If condition={!loader}>
        <Then>
          <ScrollView
            style={{
              marginBottom,
            }}
            showsVerticalScrollIndicator={false}
          >
            <CrossButton />
            <ImageCarousel images={images} />
            <View
              style={{
                paddingHorizontal: Metrics.screenHorizontalPadding / 2,
                paddingVertical: Metrics.doubleBaseMargin,
              }}
            >
              <HeadingWithFavourite headingTitle={title} />
              <IconWithText
                iconName="location-outline"
                text={`${distanceFromCity} km from city center`}
              />
              <AppText
                style={{
                  paddingTop: Metrics.doubleBaseMargin - 5,
                  lineHeight: 25,
                }}
                text={description}
              />
              <Divider marginVertical={Metrics.doubleBaseMargin} />
              <RoomTypesSection />
            </View>
          </ScrollView>

          <DetailsFooter perNightRate={perNightRate} />
        </Then>
        <Else>
          <Loader />
        </Else>
      </If>
    </ScreenContainer>
  );
};

export default DetailScreen;
