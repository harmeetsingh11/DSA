function reverseArrayIterative(arr) {
  const n = arr.length; // Get the length of the array
  let p1 = 0; // Initialize the p1 pointer at the beginning of the array
  let p2 = n - 1; // Initialize the p2 pointer at the end of the array

  // Iterate until the pointers meet or cross each other
  while (p1 < p2) {
    // Swap the elements at the p1 and p2 indices using destructuring assignment
    [arr[p1], arr[p2]] = [arr[p2], arr[p1]];

    // Move the p1 pointer towards the right
    p1++;

    // Move the p2 pointer towards the left
    p2--;
  }

  // Print the reversed array
  return arr.join(' ');
}

//   Call the function
// console.log(reverseArrayIterative([1, 2, 3, 4, 5]));

// Export the function for testing
module.exports = reverseArrayIterative;
