export default function q994(params) {
  const searchInsert = function (nums, target) {
    if (target > nums[nums.length - 1]) return nums.length;
    if (target < nums[0]) return 0;

    let low = 0;
    let high = nums.length;
    let guess;
    while (low <= high) {
      guess = Math.floor((high - low) / 2) + low;
      if (nums[guess] > target) {
        if (nums[guess - 1] < target) return guess;
        high = guess;
      } else if (nums[guess] < target) low = guess;
      else return guess;
    }
  };

  return searchInsert(params[0], params[1]);
}

export const cases35 = [
  {
    input: [[1, 3, 5, 6], 5],
    output: 2,
  },
  {
    input: [[1, 3, 5, 6], 2],
    output: 1,
  },
  {
    input: [[1, 2, 3, 5], 4],
    output: 3,
  },
  {
    input: [[1, 2, 3, 5], 1],
    output: 0,
  },
  {
    input: [
      [
        1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 19, 25, 26, 35, 54, 61, 90, 100,
        102, 105, 110, 153,
      ],
      49,
    ],
    output: 16,
  },
];
