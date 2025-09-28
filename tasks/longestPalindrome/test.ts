import { longestPalindrome } from "./solution";

describe("longestPalindrome", () => {
  it("should return a palindrome for example 1", () => {
    const s = "babad";
    const result = longestPalindrome(s);
    expect(["bab", "aba"]).toContain(result); // both valid
  });

  it("should return a palindrome for example 2", () => {
    const s = "cbbd";
    expect(longestPalindrome(s)).toBe("bb");
  });

  it("should handle a single character string", () => {
    const s = "a";
    expect(longestPalindrome(s)).toBe("a");
  });

  it("should handle two characters with palindrome", () => {
    const s = "aa";
    expect(longestPalindrome(s)).toBe("aa");
  });

  it("should handle two characters without palindrome", () => {
    const s = "ab";
    expect(longestPalindrome(s)).toBe("a"); // or "b"
  });

  it("should handle an entire string being a palindrome", () => {
    const s = "racecar";
    expect(longestPalindrome(s)).toBe("racecar");
  });

  it("should return the first longest palindrome if multiple exist", () => {
    const s = "forgeeksskeegfor";
    expect(longestPalindrome(s)).toBe("geeksskeeg");
  });

  it("should handle numeric characters", () => {
    const s = "123321";
    expect(longestPalindrome(s)).toBe("123321");
  });

  it("should handle mixed alphanumeric string", () => {
    const s = "a1b1a";
    expect(longestPalindrome(s)).toBe("a1b1a");
  });

  it("should return empty string for empty input", () => {
    expect(longestPalindrome("")).toBe("");
  });
});
