import { letterCombinations } from "./solution";

describe("letterCombinations", () => {

  test("should return an empty array for an empty input string", () => {
    expect(letterCombinations("")).toEqual([]);
  });


  test("should return correct combinations for a single digit '2'", () => {
    const expected = ["a", "b", "c"];
    const result = letterCombinations("2");
    expect(result.sort()).toEqual(expected.sort());
  });

  test("should return correct combinations for '23'", () => {
    const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    const result = letterCombinations("23");
    expect(result.sort()).toEqual(expected.sort());
  });

  test("should handle digits with 4 letters, like '79'", () => {
    const expected = [
      "pw", "px", "py", "pz",
      "qw", "qx", "qy", "qz",
      "rw", "rx", "ry", "rz",
      "sw", "sx", "sy", "sz"
    ];
    const result = letterCombinations("79");
    expect(result.sort()).toEqual(expected.sort());
  });

  test("should return correct combinations for a 3-digit input '234'", () => {
    const result = letterCombinations("234");
    expect(result.length).toBe(27);
    expect(result).toContain("adg");
    expect(result).toContain("cfi");
    expect(result.every(combo => combo.length === 3)).toBe(true);
  });

  test("should handle a 4-digit input '2345'", () => {
    const result = letterCombinations("2345");
    expect(result.length).toBe(81);
    expect(result).toContain("adgj");
    expect(result).toContain("cfil");
    expect(result.every(combo => combo.length === 4)).toBe(true);
  });
});