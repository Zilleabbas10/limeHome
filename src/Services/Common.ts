import { APP_CONSTANTS } from "../Constants";
import { DetailedPropertyType, PropertyType } from "../types";

/**
 * Parses Property object to its own format and return a new object
 *
 * @param {*} news
 * @returns
 */
const getFormattedDetailedProperty = ({
  id,
  name,
  description,
  distance,
  images,
}: any): DetailedPropertyType => {
  const newImages = images.map(({ url }: any) => url);
  return {
    id: id || "",
    title: name || "",
    description: description || "",
    distanceFromCity: Math.round(distance * 10) / 10,
    images: newImages.slice(0, newImages.length / 2),
  };
};

/**
 * Parses Property object to its own format and return a new object
 *
 * @param {*} news
 * @returns
 */
type formatPropertyType = {
  property: any;
  index: number;
};
const formatProperty = ({
  property,
  index,
}: formatPropertyType): PropertyType => {
  const { id, name, images, distance, location } = property;

  return {
    id: id || "",
    title: name || "",
    imageUrl: images[0].url || "",
    distanceFromCity: Math.round(distance * 10) / 10,
    perNightRate: APP_CONSTANTS.PER_NIGHT_RATE[index],
    location: { latitude: location.lat, longitude: location.lng },
  };
};

/**
 * Parses response from the endpoint.GET_PROPERTIES and returns formatted properties
 *
 * @param {*} response
 * @returns
 */
type getFormattedPropertiesType = {
  properties: Array<object>;
};
const getFormattedProperties = ({
  properties = [],
}: getFormattedPropertiesType): Array<PropertyType> => {
  return properties.map((property, index) =>
    formatProperty({ property, index })
  );
};

export default {
  getFormattedProperties,
  getFormattedDetailedProperty,
};
