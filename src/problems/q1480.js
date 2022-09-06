export default function q1480(params) {
  const runningSum = (nums) => {
    const result = [nums[0]];
    for (let index = 1; index < nums.length; index++) {
      result.push(result[index - 1] + nums[index]);
    }

    return result;
  };
  return runningSum(params[0]);
}

export const cases1480 = [
  {
    input: [[1, 2, 3, 4]],
    output: [1, 3, 6, 10],
  },
  {
    input: [[1, 1, 1, 1, 1]],
    output: [1, 2, 3, 4, 5],
  },
  {
    input: [[3, 1, 2, 10, 1]],
    output: [3, 4, 6, 16, 17],
  },
];
