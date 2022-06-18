import { MarkerType, PropertyType } from "../types";

type FuncContainsType = {
  property: PropertyType;
  query: string;
};
const contains = ({ property, query }: FuncContainsType): boolean => {
  const { id, title } = property;
  //   if (name.toLowerCase().includes(query) || id.toString().includes(query)) {
  if (title.toLowerCase().includes(query)) {
    return true;
  }
  return false;
};

type likedPropertiesType = {
  likedProperties: string[];
  properties: PropertyType[];
};
export const getLikedProperties = ({
  properties,
  likedProperties,
}: likedPropertiesType): PropertyType[] =>
  properties.filter((property) => likedProperties.includes(property.id));

type searchQueryInPropertiesType = {
  text: string;
  properties: PropertyType[];
};
export const searchQueryInProperties = ({
  text,
  properties,
}: searchQueryInPropertiesType): PropertyType[] => {
  const query = text.toLowerCase();
  const filteredProperties = properties.filter((property: PropertyType) =>
    contains({ property, query })
  );
  return filteredProperties;
};

type likeUnlikePropertiesInListType = {
  id: string;
  likedProperties: string[];
};
export const likeUnlikePropertiesInList = ({
  id,
  likedProperties,
}: likeUnlikePropertiesInListType) => {
  const duplicateLikedProperties = [...likedProperties];
  const idExist = duplicateLikedProperties.includes(id);
  if (idExist) {
    const idIndex = duplicateLikedProperties.findIndex((item) => item === id);
    duplicateLikedProperties.splice(idIndex, 1);
    return duplicateLikedProperties;
  }
  duplicateLikedProperties.push(id);
  return duplicateLikedProperties;
};

type getLocationMarkersType = {
  properties: PropertyType[];
};
export const getLocationMarkers = ({
  properties = [],
}: getLocationMarkersType): MarkerType[] => {
  return properties.map(({ location, perNightRate, id }) => {
    return {
      location,
      perNightRate,
      id,
    };
  });
};

type findPropertyByIdType = {
  properties: PropertyType[];
  propertyId: string;
};
export const findPropertyById = ({
  properties = [],
  propertyId,
}: findPropertyByIdType) => {
  return properties.find(({ id }) => propertyId === id);
};

type isObjectEmptyType = {
  obj: object | null;
};
export const isObjectEmpty = ({ obj }: isObjectEmptyType) => {
  if (obj === null) return false;
  return Object.keys(obj).length === 0;
};

/**
 *  uuid generator
 *
 * @returns
 */
export function generateUUID() {
  const oldStr = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

  return `${Date.now()}-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
