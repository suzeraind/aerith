import { zigzagConvert } from "./solution";

describe("zigzagConvert", () => {
  test("Example 1: PAYPALISHIRING, numRows = 3", () => {
    expect(zigzagConvert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
  });

  test("Example 2: PAYPALISHIRING, numRows = 4", () => {
    expect(zigzagConvert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  });

  test("Example 3: A, numRows = 1", () => {
    expect(zigzagConvert("A", 1)).toBe("A");
  });

  test("String shorter than number of rows", () => {
    expect(zigzagConvert("AB", 5)).toBe("AB");
  });

  test("numRows = 1 should return the same string", () => {
    expect(zigzagConvert("HELLO", 1)).toBe("HELLO");
  });

  test("numRows = string length (each character in separate row)", () => {
    expect(zigzagConvert("HELLO", 5)).toBe("HELLO");
  });

  test("numRows = 2 (simple zigzag pattern)", () => {
    expect(zigzagConvert("PAYPALISHIRING", 2)).toBe("PYAIHRNAPLSIIG");
  });

  test("Single character string", () => {
    expect(zigzagConvert("Z", 3)).toBe("Z");
  });
});