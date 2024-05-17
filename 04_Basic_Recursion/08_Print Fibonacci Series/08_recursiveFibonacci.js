// Instead of printing the Fibonacci series till N, we’re going to print the Nth Fibonacci number using functional recursion with multiple function calls.

// index -> 0 1 2 3 4 5 6...
// fib ->   0 1 1 2 3 5 8...
// fib(6) = 5 + 3 = fib(5) + fib(4) = 8
// fib(n) = fib(n-1) + fib(n-2)

function generateNfibonacciRecursive(n) {
  // Base case
  // Series/index starting from 0
  // fib(0) = 0, fib(1) = 1
  if (n <= 1) {
    return n;
  }

  // Problem broken down into 2 functional calls
  // and their results combined and returned.
  const last = generateNfibonacciRecursive(n - 1);
  const secondLast = generateNfibonacciRecursive(n - 2);

  return last + secondLast;
}

//   Call the function using sample input
// console.log(generateNfibonacciRecursive(6));

// Export the function for testing
module.exports = generateNfibonacciRecursive;
