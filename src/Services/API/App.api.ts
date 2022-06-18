import axios from "axios";
import APP_ENDPOINTS from "./endpoints";

const getProperties = async () => {
  try {
    const URL = `${APP_ENDPOINTS.GET_PROPERTIES}`;
    const response = await axios.get(URL);
    return { ...response };
  } catch (error) {
    return { error, data: [] };
  }
};

type getPropertyByIdType = {
  propertyId: string;
};
const getPropertyById = async ({ propertyId }: getPropertyByIdType) => {
  try {
    const URL = `${APP_ENDPOINTS.GET_PROPERTY_BY_ID}${propertyId}`;
    const response = await axios.get(URL);
    return { ...response };
  } catch (error) {
    return { error, data: [] };
  }
};

export default {
  getProperties,
  getPropertyById,
};
