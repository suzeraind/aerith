import { lengthOfLongestSubstring } from "./solution";

describe("lengthOfLongestSubstring", () => {
  test("should return 0 for empty string", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  test("should return 1 when all characters are the same", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  test("should return 3 for 'abcabcbb'", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  test("should return 3 for 'pwwkew'", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  test("should handle string with spaces correctly", () => {
    expect(lengthOfLongestSubstring("a b c a b")).toBe(3); // "a b" or "b c"
  });

  test("should handle string with digits and symbols", () => {
    expect(lengthOfLongestSubstring("123@123")).toBe(4); // "123@"
  });

  test("should return full length if all characters are unique", () => {
    expect(lengthOfLongestSubstring("abcdef")).toBe(6);
  });

  test("should return 2 for minimal repeating substrings", () => {
    expect(lengthOfLongestSubstring("abba")).toBe(2); // "ab" or "ba"
  });

  test("should work with long unique sequence", () => {
    const str = "abcdefghijklmnopqrstuvwxyz"; 
    expect(lengthOfLongestSubstring(str)).toBe(26);
  });
});
