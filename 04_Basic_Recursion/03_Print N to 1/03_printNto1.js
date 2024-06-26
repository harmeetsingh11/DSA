function printNto1(n, arr = []) {
  // Base case: When n reaches 0, return the empty array []
  if (n === 0) {
    return arr;
  } else {
    // we have to print from n to 1

    // First, print one element
    // print n (n=5 o/p- 5 4 3 2 1) i.e print 5
    arr.push(n);

    // TRUST the function that it will print n-1 to 1
    // It will print n-1 elements
    // Recursive call to printNto1 function for next element
    // Pass the array as an argument to avoid creating a new array in each recursion
    printNto1(n - 1, arr);

    return arr;
  }
}

// Call the function using sample inputs
// console.log(printNto1(5).join(' ')); // Output: 5 4 3 2 1

// export the function for testing
module.exports = printNto1;
