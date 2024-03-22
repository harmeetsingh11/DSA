var maxFrequency = function (nums, k) {
    countingSort(nums); // Sort the array using counting sort
    let start = 0; // Start index of the current subarray
    let subarraySum = 0; // Sum of elements in the current subarray
    let maxFrequency = 1; // Initialize the maximum frequency to 1

    // Iterate through the sorted array
    for (let i = 0; i < nums.length; i++) {
        let subarrayLength = i - start + 1; // Length of the current subarray
        let subarrayProduct = nums[i] * subarrayLength; // Product of element and subarray length
        subarraySum += nums[i]; // Add the current element to the subarray sum

        // Adjust the subarray to satisfy the condition (product - sum <= k)
        while (subarrayProduct - subarraySum > k) {
            subarraySum -= nums[start]; // Remove the leftmost element from the subarray
            start++; // Move the start index to the right
            subarrayLength--; // Decrease the length of the subarray
            subarrayProduct = nums[i] * subarrayLength; // Recalculate the product
        }

        // Update the maximum frequency based on the current subarray length
        maxFrequency = Math.max(maxFrequency, subarrayLength);
    }

    return maxFrequency; // Return the final result
}

/**
 * Counting Sort to sort the array in non-decreasing order.
 * @param {number[]} nums - The input array of numbers.
 */
function countingSort(nums) {
    const maxElement = Math.max(...nums); // Find the maximum element in the array
    const countMap = Array(maxElement + 1).fill(0); // Create an array to store the count of each element
    let index = 0;

    // Count the occurrences of each element in the array
    for (const num of nums) {
        countMap[num]++;
    }

    // Reconstruct the sorted array
    for (let i = 0; i <= maxElement; i++) {
        while (countMap[i]-- > 0) {
            nums[index++] = i;
        }
    }
}