export function reverseInteger(x: number): number {
  const MAX_INT = 2147483647;
  const MIN_INT = -2147483648;

  let reversed = 0;
  let num = Math.abs(x);

  while (num > 0) {
    const digit = num % 10;
    if (reversed > Math.floor((MAX_INT - digit) / 10)) {
      return 0;
    }
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  reversed = x < 0 ? -reversed : reversed;
  if (reversed > MAX_INT || reversed < MIN_INT) {
    return 0;
  }

  return reversed;
}