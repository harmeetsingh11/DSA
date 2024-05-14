function factorialNumbers(n) {
  if (n === 1) {
    return 1;
  } else {
    return factorialNumbers(n - 1) * n;
  }
}

// call the function using sample input
// console.log(factorialNumbers(5));

// Export the function for testing
module.exports = factorialNumbers;
