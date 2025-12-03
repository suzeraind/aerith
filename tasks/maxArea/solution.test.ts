import { maxArea } from "./solution";

describe("maxArea", () => {
  test("should be defined", () => {
    expect(maxArea).toBeDefined();
  });

  test("handles minimal input (2 elements)", () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  test("works with increasing heights", () => {
    expect(maxArea([1, 2, 3, 4, 5])).toBe(6); 
  });

  test("works with decreasing heights", () => {
    expect(maxArea([5, 4, 3, 2, 1])).toBe(6);
  });

  test("works with mixed heights", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  test("handles large uniform heights", () => {
    expect(maxArea([1000, 1000, 1000, 1000])).toBe(3000);
  });

  test("handles case where tallest lines are not optimal", () => {
    expect(maxArea([10, 1, 10, 1, 10])).toBe(40);
  });
});
