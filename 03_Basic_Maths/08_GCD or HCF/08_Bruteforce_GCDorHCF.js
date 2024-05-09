function calcGCDBruteForce(n, m) {
  // Initialize the result to 1 (since 1 is a common divisor for all numbers)
  let ans = 1;

  // Iterate through all numbers from 1 to the minimum of n and m
  for (let i = 1; i <= Math.min(n, m); i++) {
    // Check if both n and m are divisible by i (i is a common divisor)
    if (n % i === 0 && m % i === 0) {
      ans = i; // If i is a common divisor, update the result to i
    }
  }

  return ans; // Return the final GCD
}

// Call the function using sample input
// console.log(calcGCDBruteForce(9, 6)); // Output: 3

// Export the function for testing
module.exports = calcGCDBruteForce;
