import { findPairsOn } from "../algorithms";
import repeatedData from "../mockData/repatedData";

describe("when data has special distribution", () => {
  test("should return a list or empty list", () => {
    const mockRepeatedData = repeatedData();
    expect(Array.isArray(findPairsOn(156, mockRepeatedData))).toBe(true);
  });

  test("should return all possible combinations", () => {
    /**
     * mockRepeatedData has 400 objects where h_in = 70.
     * Combination: 400C2 = 79800 possible combinations.
     */
    const mockRepeatedData = repeatedData();
    expect(findPairsOn(140, mockRepeatedData).length).toStrictEqual(79800);
  });
});
