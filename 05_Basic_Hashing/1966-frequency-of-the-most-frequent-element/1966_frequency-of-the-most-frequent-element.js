var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);

  let left = 0,
    right = 0;

  let result = 0,
    total = 0;

  while (right < nums.length) {
    total += nums[right];

    let diff = nums[right] * (right - left + 1) - total;

    while (diff > k) {
      total -= nums[left];
      left++;
      diff = nums[right] * (right - left + 1) - total;
    }

    result = Math.max(result, right - left + 1);
    right++;
  }
  return result;
};

module.exports = maxFrequency;
