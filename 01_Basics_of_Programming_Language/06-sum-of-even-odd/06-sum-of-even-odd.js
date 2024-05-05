function sumOfEvenAndOddDigits(n) {
  let evenSum = 0;
  let oddSum = 0;

  // Convert the number to a string to iterate over its digits
  const numString = n.toString();

  // Iterate over each digit of the number
  for (let digit of numString) {
    const num = parseInt(digit);
    if (num % 2 === 0) {
      evenSum += num; // Add even digit to evenSum
    } else {
      oddSum += num; // Add odd digit to oddSum
    }
  }

  return `${evenSum} ${oddSum}`;
}

// Example usage:
// console.log(sumOfEvenAndOddDigits(132456)); // Output: 12 9
// console.log(sumOfEvenAndOddDigits(552245)); // Output: 8 15

// Export the function for testing
module.exports = sumOfEvenAndOddDigits;
