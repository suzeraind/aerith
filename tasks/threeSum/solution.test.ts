import { threeSum } from "./solution";

describe("threeSum", () => {
  const sortTriplets = (arr: number[][]) =>
    arr.map(t => t.slice().sort((a, b) => a - b)).sort();

  test("example 1", () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const result = threeSum(nums);
    expect(sortTriplets(result)).toEqual(
      sortTriplets([
        [-1, -1, 2],
        [-1, 0, 1],
      ])
    );
  });

  test("example 2", () => {
    const nums = [0, 1, 1];
    expect(threeSum(nums)).toEqual([]);
  });

  test("example 3", () => {
    const nums = [0, 0, 0];
    expect(threeSum(nums)).toEqual([[0, 0, 0]]);
  });

  test("multiple valid combinations", () => {
    const nums = [-2, 0, 1, 1, 2];
    const result = threeSum(nums);
    expect(sortTriplets(result)).toEqual(
      sortTriplets([
        [-2, 0, 2],
        [-2, 1, 1],
      ])
    );
  });

  test("no triplets for small input", () => {
    expect(threeSum([1, 2])).toEqual([]);
    expect(threeSum([])).toEqual([]);
  });

  test("large numbers", () => {
    const nums = [100000, -100000, 0];
    expect(threeSum(nums)).toEqual([[-100000, 0, 100000]]);
  });

  test("avoid duplicate triplets", () => {
    const nums = [-1, 0, 1, 0];
    const result = threeSum(nums);
    expect(sortTriplets(result)).toEqual(sortTriplets([[-1, 0, 1]]));
  });

  test("function should be defined", () => {
    expect(threeSum).toBeDefined();
  });
});
