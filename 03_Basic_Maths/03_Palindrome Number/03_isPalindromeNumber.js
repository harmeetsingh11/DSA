function isPalindrome(n) {
  // Negative numbers and numbers ending with 0 (except 0 itself) cannot be palindromes
  if (n < 0 || (n % 10 === 0 && n !== 0)) {
    return false;
  }

  let reversed = 0; // Variable to store the reversed number
  let originalN = n; // Store the original number for comparison later

  // Iterate until all digits are processed
  while (n > 0) {
    // Extract the last digit of the number
    let digit = n % 10;
    // Build the reversed number by appending the current digit
    reversed = reversed * 10 + digit;
    // Remove the last digit from the original number
    n = Math.floor(n / 10);
  }

  // If the reversed number equals the original number, it's a palindrome
  return originalN === reversed;
}

// Call the fucntion using sample inputs
// console.log(isPalindrome(51415)); // Output: true

// Export the function for testing
module.exports = isPalindrome;
