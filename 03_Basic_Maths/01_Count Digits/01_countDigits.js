function countDivisibleDigits(n) {
  let count = 0;
  let originalN = n;

  // Iterate through each digit of the number
  while (n > 0) {
    // Extract the last digit
    let digit = n % 10;
    // Check if the digit is not zero and divides the original number evenly
    if (digit !== 0 && originalN % digit === 0) {
      count++;
    }
    // Remove the last digit
    n = Math.floor(n / 10);
  }

  return count;
}

// Call the function using smaple inputs
// console.log(countDivisibleDigits(336)); // Output: 3

// Export the function for testing
module.exports = countDivisibleDigits;
