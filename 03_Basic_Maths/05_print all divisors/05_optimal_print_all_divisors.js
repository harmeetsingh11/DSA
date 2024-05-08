// Optimal Approach
// Time Complexity - O(sqrt(n))
function printAllDivisorsOptimal(n) {
  // Initialize an empty array to store the divisors.
  const arr = [];

  // Iterate through numbers from 1 to the square root of 'n'.
  for (let i = 1; i <= Math.sqrt(n); i++) {
    // Check if 'i' is a divisor of 'n'.
    if (n % i === 0) {
      // If it is a divisor, add it to the array of divisors.
      arr.push(i);
      // Check if 'i' is not equal to 'n/i' to avoid duplicates.
      if (i !== n / i) {
        // If not equal, add 'n/i' to the array of divisors.
        arr.push(n / i);
      }
    }
  }

  // Sort the array of divisors in ascending order.
  arr.sort((a, b) => a - b);

  // Print the divisors separated by spaces.
  console.log(arr.join(' '));
}

// Call the function using sample input
// printAllDivisorsOptimal(36);

// Export the function for testing
module.exports = printAllDivisorsOptimal;
