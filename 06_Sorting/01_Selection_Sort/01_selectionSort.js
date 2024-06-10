function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the minimum is the first element
    let minIndex = i;

    // Check the rest of the array for a smaller element
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // If the minimum is not in the position i, swap it
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage
let array = [64, 25, 12, 22, 11];
// console.log('Sorted array:', selectionSort(array));

// Export the function for testing
module.exports = selectionSort;
