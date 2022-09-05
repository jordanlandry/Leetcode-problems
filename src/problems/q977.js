export default function q977(params) {
  const sortedSquares = (nums) => {
    const sorted = [];

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      if (nums[left] * nums[left] > nums[right] * nums[right]) {
        sorted.push(nums[left] * nums[left]);
        left++;
      } else {
        sorted.push(nums[right] * nums[right]);
        right--;
      }
    }
    return sorted.reverse();
  };
  return sortedSquares(params[0]);
}

export const cases977 = [
  {
    input: [[-5, 3, 6, 10, 15]],
    output: [9, 25, 36, 100, 225],
  },
];
