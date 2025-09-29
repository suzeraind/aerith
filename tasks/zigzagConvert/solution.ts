export function zigzagConvert(s: string, numRows: number): string {
  if (numRows === 1 || numRows >= s.length) return s;
  let rows = new Array(numRows).fill("");

  let curRow = 0;
  let goingDown = false;

  for (let char of s) {
    rows[curRow] += char;
    if (curRow === 0 || curRow === numRows - 1) {
      goingDown = !goingDown;
    }

    curRow += goingDown ? 1 : -1;
  }
  return rows.join("");
}
