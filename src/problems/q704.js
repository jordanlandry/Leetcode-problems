export default function q704(params) {
  const search = (nums, target) => {
    let low = 0;
    let high = nums[nums.length - 1];
    let guess;

    while (low <= high) {
      guess = Math.floor((low + high) / 2);

      if (nums[guess] === target) return guess;
      if (nums[guess] > target) high = guess - 1; //
      else low = guess + 1;
    }

    return -1;
  };

  return search(params[0], params[1]);
}

export const cases704 = [
  {
    input: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5],
    output: 5,
  },
];
