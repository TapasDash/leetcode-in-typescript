/**
 Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums: number[]): void => {
  let nonZeroes: number[] = [];
  let zeroes: number[] = [];

  for (let num of nums) {
    if (num !== 0) {
      nonZeroes.push(num);
    } else {
      zeroes.push(num);
    }
  }

  nums.splice(0, nums.length, ...nonZeroes, ...zeroes);
};
