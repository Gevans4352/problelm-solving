function intersect(nums1: number[], nums2: number[]): number[] {
  const stack = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) == true) {
      stack.push(nums1[i]);
      nums2.splice(nums2.indexOf(nums1[i]), 1);
    }
  }
  return stack;
}
