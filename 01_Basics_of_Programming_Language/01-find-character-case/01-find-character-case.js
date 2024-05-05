const readline = require('readline');

function checkCharacterType() {
  // Create readline interface
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Prompt user to enter a character
  rl.question('', (c) => {
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

    // Close the readline interface
    rl.close();
  });
}

// Call the function to execute
// checkCharacterType();

// Export the function for testing
module.exports = checkCharacterType;
