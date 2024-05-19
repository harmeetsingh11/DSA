function maxFrequency(nums, k) {
  // Sort the array
  nums.sort((a, b) => a - b);

  let left = 0;
  let total = 0;
  let result = 0;

  for (let right = 0; right < nums.length; right++) {
    // Add the current number to the total
    total += nums[right];

    // While the total plus the allowed increment operations (k)
    // is less than the current window size times the current number,
    // slide the window to the right by moving the left pointer
    while (total + k < nums[right] * (right - left + 1)) {
      total -= nums[left];
      left++;
    }

    // Update the result with the maximum window size
    result = Math.max(result, right - left + 1);
  }

  return result;
}

console.log(maxFrequency([1, 2, 4], 5)); // Output: 3

console.log(maxFrequency([1, 4, 8, 13], 5)); // Output: 2

console.log(maxFrequency([3, 9, 6], 2)); // Output: 1

// export the function for testing
module.exports = maxFrequency;
