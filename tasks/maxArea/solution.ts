export function maxArea(height: Array<number>): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const area = width * minHeight;

    max = Math.max(max, area);
    height[left] < height[right] ? left++ : right--;
  }

  return max;
}

