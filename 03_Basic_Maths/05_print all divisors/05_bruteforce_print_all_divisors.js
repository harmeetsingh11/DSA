// Brute Force Approach
// Time Complexity - O(n)
function printAllDivisorsBruteForce(n) {
  // Iterate through numbers from 1 to 'n'.
  for (let i = 1; i <= n; i++) {
    // Check if 'i' is a divisor of 'n'.
    if (n % i === 0) {
      // If it is a divisor, print 'i'.
      console.log(i);
    }
  }
}

// call the function using sample inputs
// printAllDivisorsBruteForce(36);

// Export the function for testing
module.exports = printAllDivisorsBruteForce;
