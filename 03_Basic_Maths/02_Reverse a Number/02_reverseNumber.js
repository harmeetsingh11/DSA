function reverseNumber(N) {
  let reversed = 0;

  // Iterate until N becomes 0
  while (N > 0) {
    // Extract the last digit of N
    let digit = N % 10;
    // Update the reversed number by adding the digit

    // suppose n = 5356
    // first iteration last digit extract is 6.
    // #second iteration we somehow need to add/append next extracted digit which is 5 to 6. which will give 65
    // #So here's how we can do it: 60*10 + lastDigit
    // 6*10 + 5 = 65
    // #and so on
    reversed = reversed * 10 + digit;

    // Remove the last digit from N
    N = Math.floor(N / 10);
  }
  return reversed;
}

// Call the function with sample input
// console.log(reverseNumber(1234)); // Output: 4321

// Export the function for testing
module.exports = reverseNumber;
