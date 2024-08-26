function insertionSort(arr) {
  // Start iterating from the first element (index 0)
  for (let i = 0; i < arr.length; i++) {
    let j = i;

    // Compare the current element with the previous elements and swap if needed
    while (j > 0 && arr[j - 1] > arr[j]) {
      // Swap the elements using array destructuring
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--; // Move to the previous element for further comparisons
    }
  }

  // Return the sorted array
  return arr;
}

// Example usage:
const arr = [56, 37, 88, 41, 12];
// console.log(insertionSort(arr));

// Export the function for testing
module.exports = insertionSort;
