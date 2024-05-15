function reverseArrayRecursive(nums, start = 0, end = nums.length - 1) {
  // Base case: If start is greater than or equal to end, return the array as it is reversed
  if (start >= end) {
    return nums;
  } else {
    // Swap the elements at the start and end indices using destructuring assignment
    [nums[start], nums[end]] = [nums[end], nums[start]];

    // TRUST the function: reverseArray function will reverse next pair of elements
    // Move the start pointer towards the right and end pointer towards the left
    reverseArray(nums, start + 1, end - 1);
  }

  // Return the reversed array
  return nums.join(' ');
}

// call the function using sample inputs
// console.log(reverseArrayRecursive([1, 2, 3, 4, 5]));

// Export the function for testing
module.exports = reverseArrayRecursive;
