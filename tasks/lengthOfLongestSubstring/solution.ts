export function lengthOfLongestSubstring(s: string): number {
  if (!s.length) return 0;
  if (new Set(s).size === s.length) return s.length;

  let left = 0;
  let right = 0;
  let maxLen = 0;
  let set = new Set<string>();

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      maxLen = Math.max(maxLen, right - left + 1);
      right++;
    }
    else {
      set.delete(s[left]);
      left++;
    }
  }

  return maxLen;
}
