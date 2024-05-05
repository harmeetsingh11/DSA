function fibonacci(n) {
  // Edge cases for n = 1 and n = 2
  if (n === 1 || n === 2) {
    return 1;
  }

  let prev = 1;
  let curr = 1;

  // Calculate Fibonacci number iteratively
  for (let i = 3; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

// Call the function with sample input
// console.log(fibonacci(6)); // Output: 8

// Export the function for testing
module.exports = fibonacci;
