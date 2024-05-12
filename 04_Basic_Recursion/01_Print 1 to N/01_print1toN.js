function generateArray1toN(n) {
  // base case: When n reaches 0, it means that we have generated all the numbers from 1 to the original value of n, return the empty array [].
  //   At this point, we should stop recursion and return the generated array arr, as it contains all the integers from 1 to n.
  if (n === 0) {
    return [];
  } else {
    //  TRUST the function that it will generate array from 1 to n-1
    const arr = generateArray1toN(n - 1);

    // concatenate/append the nth(last element) to the generated array and return the array
    return arr.concat(n);
  }
}

// Call the function using sample inputs
// console.log(generateArray1toN(5)); // Output: 1 2 3 4 5

// Export the function for testing
module.exports = generateArray1toN;
