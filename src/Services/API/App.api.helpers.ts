import { AppApiHandlers } from ".";
import { CommonHelpers } from "..";

export const getPropertiesData = async () => {
  const propertiesResponse = await AppApiHandlers.getProperties();
  const formattedProperties = CommonHelpers.getFormattedProperties({
    properties: propertiesResponse.data?.payload || [],
  });
  return formattedProperties;
};

type getPropertyDataByIdType = {
  propertyId: string;
};
export const getPropertyDataById = async ({
  propertyId,
}: getPropertyDataByIdType) => {
  const propertyResponse = await AppApiHandlers.getPropertyById({ propertyId });
  const formattedProperty = CommonHelpers.getFormattedDetailedProperty(
    propertyResponse.data?.payload || {}
  );
  return formattedProperty;
};
