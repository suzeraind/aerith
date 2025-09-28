export function longestPalindrome(s: string): string {
  if (!s || s.length === 0) return "";

  let start = 0;
  let end = 0;

  const expand = (left: number, right: number): [number, number] => {
    const n: number = s.length;
    while (left >= 0 && right < n && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1];
  };

  for (let i = 0; i < s.length; i++) {
    // odd 
    const [l1, r1] = expand(i, i);
    if (r1 - l1 > end - start) {
      start = l1;
      end = r1;
    }

    // even 
    const [l2, r2] = expand(i, i + 1);
    if (r2 - l2 > end - start) {
      start = l2;
      end = r2;
    }
  }

  return s.slice(start, end + 1);
}
