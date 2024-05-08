function sumOfAllDivisorsBruteForce(n) {
  const divisorList = []; // Create an empty array to store divisors.

  // Loop from 1 to 'n' because we need to find divisors from 1 to 'n'.
  for (let num = 1; num <= n; num++) {
    // For each number 'num', it evaluates its divisors and adds them to the 'divisorList'.
    for (let j = 1; j <= Math.sqrt(num); j++) {
      // If 'j' is a divisor of 'num', add it to the list.
      if (num % j === 0) {
        divisorList.push(j);

        // Also, add the corresponding divisor if it's not equal to 'j'.
        if (j !== num / j) {
          divisorList.push(num / j);
        }
      }
    }
  }

  // Calculate and return the sum of all divisors.
  return divisorList.reduce((acc, curr) => acc + curr, 0);
}

// Call the function using sample input
// console.log(sumOfAllDivisorsBruteForce(5));

// Export the function for testing
module.exports = sumOfAllDivisorsBruteForce;
