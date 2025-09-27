import { findMedianSortedArrays } from "./solution";

describe("findMedianSortedArrays", () => {
  test("example 1: odd total length", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  test("example 2: even total length", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  test("handles empty first array", () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
    expect(findMedianSortedArrays([], [2, 3])).toBe(2.5);
  });

  test("handles empty second array", () => {
    expect(findMedianSortedArrays([1], [])).toBe(1);
    expect(findMedianSortedArrays([2, 3], [])).toBe(2.5);
  });

  test("arrays with negative numbers", () => {
    expect(findMedianSortedArrays([-5, -3, -1], [2, 4, 6])).toBe(0.5);
  });

  test("arrays of different lengths", () => {
    expect(findMedianSortedArrays([1, 2, 3, 4, 5], [6, 7])).toBe(4);
  });

  test("single element arrays", () => {
    expect(findMedianSortedArrays([1000000], [-1000000])).toBe(0);
  });

  test("large arrays same values", () => {
    const arr1 = new Array(1000).fill(1);
    const arr2 = new Array(1000).fill(1);
    expect(findMedianSortedArrays(arr1, arr2)).toBe(1);
  });
});
