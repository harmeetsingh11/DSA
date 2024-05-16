function isPalindrome(string, start = 0, end = string.length - 1) {
  // Base Condition
  // If start exceeds end or half of the string, means all the elements
  // are compared, we return true.
  if (start >= end) {
    return true;
  }

  // If first and last character is not same, then not palindrome
  if (string[start] !== string[end]) {
    return false;
  }

  // If both characters are same, increment start and decrement end.
  // Recursively check the remaining substring.
  return isPalindrome(string, start + 1, end - 1);
}

// Call the function using sample input
// console.log(isPalindrome('abcd'.toLowerCase()));

// Export the function for testing
module.exports = isPalindrome;
