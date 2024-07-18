function bubbleSortOptimized(arr) {
  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    let didSwap = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        didSwap = true;
      }
    }
    if (!didSwap) {
      break;
    }
  }
  return arr;
}

// Example usage:
const arr = [5, 3, 8, 4, 2];
// console.log(bubbleSortOptimized(arr));

// Export the function for testing
module.exports = bubbleSortOptimized;
