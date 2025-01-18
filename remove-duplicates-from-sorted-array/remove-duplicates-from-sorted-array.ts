const removeDuplicates = (nums: number[]): number => {
  const uniqueNums = [...new Set(nums)];
  nums.splice(0, nums.length, ...uniqueNums);
  return uniqueNums.length;
};
