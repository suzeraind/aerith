const digitToLetters: Record<string, string> = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
};

export function letterCombinations(digits: string): Array<string> {
  if (!digits || digits.length === 0) {
    return [];
  }

  const combinations: Array<string> = [];

  function backtrack(index: number, currentCombination: string): void {
    if (index === digits.length) {
      combinations.push(currentCombination);
      return;
    }

    const currentDigit = digits[index];
    const letters = digitToLetters[currentDigit];

    for (const letter of letters) {
      backtrack(index + 1, currentCombination + letter);
    }
  }

  backtrack(0, "");

  return combinations;
}