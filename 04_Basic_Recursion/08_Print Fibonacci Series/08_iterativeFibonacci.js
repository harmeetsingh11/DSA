function generateFibonacciIterative(n) {
  // Initialize Fibonacci series with the first two terms
  let fibSeries = [0, 1];

  // Check if n is less than or equal to 1
  if (n <= 1) {
    return [0];
  }

  // Check if n is greater than 1
  else {
    // Continue adding terms until the desired number of terms (n) is reached
    while (fibSeries.length < n) {
      // Calculate the next term by summing the last two terms
      const nextTerm =
        fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];

      // Append the next term to the Fibonacci series
      fibSeries.push(nextTerm);
    }
  }

  // Return the generated Fibonacci series
  return fibSeries;
}

//   Call the function using sample input
// console.log(generateFibonacciIterative(5));

// Export the function for testing
module.exports = generateFibonacciIterative;
