export type AppStateType = {
  isTabBarVisible: boolean;
  properties: PropertyType[];
  likedProperties: string[];
  selectedProperty: PropertyType | null;
  loader: boolean;
};

export type SearchScreenType = {
  filteredProperties: PropertyType[];
  searchString: string;
};

export type MarkerType = {
  location: {
    latitude: number;
    longitude: number;
  };
  perNightRate: number;
  id: string;
};

export type PropertyType = {
  id: string;
  title: string;
  imageUrl: string;
  distanceFromCity: number;
  perNightRate: number;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type DetailedPropertyType = {
  id: string;
  title: string;
  description: string;
  images: string[];
  distanceFromCity: number;
};
