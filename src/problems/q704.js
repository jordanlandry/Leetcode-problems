export default function q704(nums, target) {
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

  return search(nums, target);
}
