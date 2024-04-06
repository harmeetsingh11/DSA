var findMaxAverage = function (nums, k) {
  // Calculate the sum of the first k elements of the array nums
  let sum = nums.slice(0, k).reduce((acc, element) => acc + element, 0);

  // Initialize maxSum with the sum of the first k elements
  let maxSum = sum;

  // Initialize left pointer to the start of the window
  let left = 0;
  // Initialize right pointer to the end of the window
  let right = k - 1;

  // Slide the window through the array nums
  while (right < nums.length - 1) {
    // Update sum by adding the next element and subtracting the leftmost element
    sum = sum + nums[right + 1] - nums[left];

    // Update maxSum to be the maximum of sum and maxSum
    maxSum = Math.max(sum, maxSum);

    // Move the window by incrementing left and right pointers
    left++;
    right++;
  }

  // Return the maximum average by dividing maxSum by k
  return maxSum / k;
};

export default findMaxAverage;
