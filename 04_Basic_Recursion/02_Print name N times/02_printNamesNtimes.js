function printNtimes(n) {
  // Base case: If n is 0, return from the function
  if (n === 0) {
    return;
  } else {
    // Trust the function to print n - 1 times
    printNtimes(n - 1);

    //  n-1 times done, print one more time
    process.stdout.write('Coding Ninjas ');
  }
}

// Call the function with sample input
// printNtimes(5); // Output: Coding Ninjas Coding Ninjas Coding Ninjas Coding Ninjas Coding Ninjas

//   export the function for testing
module.exports = printNtimes;
