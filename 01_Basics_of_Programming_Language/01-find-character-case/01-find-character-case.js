function checkCharacterType(c) {
  // Check if the character is uppercase
  if (c >= 'A' && c <= 'Z') {
    console.log(1); // Print 1 if the character is uppercase
  }
  // Check if the character is lowercase
  else if (c >= 'a' && c <= 'z') {
    console.log(0); // Print 0 if the character is lowercase
  }
  // Character is not an alphabet
  else {
    console.log(-1); // Print -1 if the character is not an alphabet
  }
}

// Call the function to execute
// checkCharacterType('A');

// Export the function for testing
module.exports = checkCharacterType;
