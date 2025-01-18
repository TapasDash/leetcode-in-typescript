const findDuplicate = (nums: number[]): number => {
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return nums[i];
    }
    seen.add(nums[i]);
  }
  return -1;
};
