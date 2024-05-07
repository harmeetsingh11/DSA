function checkArmstrong(n) {
  // Convert the number to a string to determine the number of digits
  const strN = String(n);
  const numOfDigits = strN.length;
  let sum = 0;
  let temp = n;

  // Calculate the sum of each digit raised to the power of the total number of digits
  while (temp > 0) {
    // Extract the last digit of the number
    const lastDigit = temp % 10;
    // Remove the last digit from the number
    temp = Math.floor(temp / 10);
    // Add the digit raised to the power of the total number of digits to the sum
    sum += Math.pow(lastDigit, numOfDigits);
  }

  // Check if the calculated sum is equal to the original number
  return sum === n;
}

// Call the function using sample inputs
// console.log(checkArmstrong(1634));

// Export the function for testing
module.exports = checkArmstrong;
