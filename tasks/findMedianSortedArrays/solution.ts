export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  const total = m + n;
  const half = Math.floor((total + 1) / 2);

  let left = 0;
  let right = m;

  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = half - i;

    const nums1Left = i > 0 ? nums1[i - 1] : -Infinity;
    const nums1Right = i < m ? nums1[i] : Infinity;
    const nums2Left = j > 0 ? nums2[j - 1] : -Infinity;
    const nums2Right = j < n ? nums2[j] : Infinity;

    if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
      if (total % 2 === 1) {
        return Math.max(nums1Left, nums2Left);
      } else {
        return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
      }
    } else if (nums1Left > nums2Right) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
  throw new Error("Arrays are not sorted or input is invalid");
}