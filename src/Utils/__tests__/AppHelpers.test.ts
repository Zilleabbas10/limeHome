import { PropertyType } from "../../types";
import {
  findPropertyById,
  getLikedProperties,
  isObjectEmpty,
  likeUnlikePropertiesInList,
  searchQueryInProperties,
} from "../AppHelpers";

const properties: PropertyType[] = [
  {
    id: "99",
    title: "berlin schlüterstraße",
    imageUrl:
      "https://limehome.imgix.net/properties/99/9fee5516-9d41-41f7-95ea-6ac72c49fb86.jpg",
    distanceFromCity: 6.3,
    perNightRate: 77,
    location: {
      latitude: 52.50176279999999,
      longitude: 13.3164893,
    },
  },
  {
    id: "100",
    title: "berlin Metroeoeiior",
    imageUrl:
      "https://limehome.imgix.net/properties/99/9fee5516-9d41-41f7-95ea-6ac72c49fb86.jpg",
    distanceFromCity: 6.3,
    perNightRate: 77,
    location: {
      latitude: 52.50176279999999,
      longitude: 13.3164893,
    },
  },
];

describe("searchQueryInProperties function use-cases", () => {
  test("return properties whose names matched with searched string", () => {
    const expectedData = [
      {
        id: "99",
        title: "berlin schlüterstraße",
        imageUrl:
          "https://limehome.imgix.net/properties/99/9fee5516-9d41-41f7-95ea-6ac72c49fb86.jpg",
        distanceFromCity: 6.3,
        perNightRate: 77,
        location: {
          latitude: 52.50176279999999,
          longitude: 13.3164893,
        },
      },
    ];
    expect(searchQueryInProperties({ properties, text: "s" })).toEqual(
      expectedData
    );
  });
  test("return empty properties if search string do not match with any property name", () => {
    expect(searchQueryInProperties({ properties, text: "z" })).toEqual([]);
  });
});

describe("getLikedProperties function use-cases", () => {
  test("return properties that are liked by user", () => {
    const likedProperties: string[] = ["100"];
    const expectedData = [
      {
        id: "100",
        title: "berlin Metroeoeiior",
        imageUrl:
          "https://limehome.imgix.net/properties/99/9fee5516-9d41-41f7-95ea-6ac72c49fb86.jpg",
        distanceFromCity: 6.3,
        perNightRate: 77,
        location: {
          latitude: 52.50176279999999,
          longitude: 13.3164893,
        },
      },
    ];
    expect(getLikedProperties({ properties, likedProperties })).toEqual(
      expectedData
    );
  });
  test("return empty properties if not liked by by user", () => {
    const likedProperties: string[] = [];

    expect(getLikedProperties({ properties, likedProperties })).toEqual([]);
  });
});

describe("likeUnlikePropertiesInList function use-cases", () => {
  test("add property Id to liked properties array", () => {
    const likedProperties: string[] = ["100", "99"];

    expect(likeUnlikePropertiesInList({ id: "35", likedProperties })).toEqual([
      "100",
      "99",
      "35",
    ]);
  });
  test("remove property Id from liked properties array", () => {
    const likedProperties: string[] = ["100", "99"];
    expect(likeUnlikePropertiesInList({ id: "100", likedProperties })).toEqual([
      "99",
    ]);
  });
});

describe("findPropertyById function use-cases", () => {
  test("return property if found in properties array", () => {
    const expectedData = {
      id: "100",
      title: "berlin Metroeoeiior",
      imageUrl:
        "https://limehome.imgix.net/properties/99/9fee5516-9d41-41f7-95ea-6ac72c49fb86.jpg",
      distanceFromCity: 6.3,
      perNightRate: 77,
      location: {
        latitude: 52.50176279999999,
        longitude: 13.3164893,
      },
    };
    expect(findPropertyById({ propertyId: "100", properties })).toEqual(
      expectedData
    );
  });
  test("return undefined if property not found in properties array", () => {
    expect(findPropertyById({ propertyId: "35", properties })).toEqual(
      undefined
    );
  });
});

describe("isObjectEmptyType function use-cases", () => {
  test("return false if object is empty", () => {
    const obj = null;
    expect(isObjectEmpty({ obj })).toEqual(false);
  });
});
