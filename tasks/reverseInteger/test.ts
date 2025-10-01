import { reverseInteger } from "./solution";

describe("reverseInteger", () => {
  test("should reverse positive numbers", () => {
    expect(reverseInteger(123)).toBe(321);
    expect(reverseInteger(1)).toBe(1);
    expect(reverseInteger(10)).toBe(1);
    expect(reverseInteger(100)).toBe(1);
  });

  test("should reverse negative numbers", () => {
    expect(reverseInteger(-123)).toBe(-321);
    expect(reverseInteger(-1)).toBe(-1);
    expect(reverseInteger(-10)).toBe(-1);
    expect(reverseInteger(-100)).toBe(-1);
  });

  test("should handle numbers with trailing zeros", () => {
    expect(reverseInteger(120)).toBe(21);
    expect(reverseInteger(901000)).toBe(109);
    expect(reverseInteger(500)).toBe(5);
  });

  test("should handle single digit numbers", () => {
    expect(reverseInteger(0)).toBe(0);
    expect(reverseInteger(5)).toBe(5);
    expect(reverseInteger(-7)).toBe(-7);
  });

  test("should return 0 when reversed number exceeds 32-bit integer range", () => {
    // Max 32-bit integer: 2147483647
    // Min 32-bit integer: -2147483648

    // These should cause overflow when reversed
    expect(reverseInteger(1534236469)).toBe(0); // Reversed: 9646324351 > 2147483647
    expect(reverseInteger(-1534236469)).toBe(0); // Reversed: -9646324351 < -2147483648
    expect(reverseInteger(2147483647)).toBe(0); // Reversed: 7463847412 > 2147483647
    expect(reverseInteger(-2147483648)).toBe(0); // Reversed: -8463847412 < -2147483648
  });

  test("should handle numbers that don't cause overflow", () => {
    // These should work fine (no overflow)
    expect(reverseInteger(1463847412)).toBe(2147483641); // Within 32-bit range
    expect(reverseInteger(-1463847412)).toBe(-2147483641); // Within 32-bit range
    expect(reverseInteger(123456789)).toBe(987654321);
    expect(reverseInteger(-123456789)).toBe(-987654321);
  });

  test("should handle edge cases", () => {
    expect(reverseInteger(0)).toBe(0);
    expect(reverseInteger(0o0)).toBe(0);
    expect(reverseInteger(101)).toBe(101);
    expect(reverseInteger(-101)).toBe(-101);
  });
});