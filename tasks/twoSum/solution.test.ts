import { twoSum } from "./solution";

describe("twoSum", () => {
  it("Example 1: should return [0,1] for nums = [2,7,11,15], target = 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("Example 2: should return [1,2] for nums = [3,2,4], target = 6", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("Example 3: should return [0,1] for nums = [3,3], target = 6", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("should handle negative numbers", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  it("should handle large target values", () => {
    expect(twoSum([1000000000, -1000000000, 3, 7], 10)).toEqual([2, 3]);
  });
});