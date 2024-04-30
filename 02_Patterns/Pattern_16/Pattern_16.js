function characterPattern(n) {
  // Loop for number of rows/lines
  for (let i = 1; i <= n; i++) {
    let row = '';

    // Loop through each column in the current row and print the current character 'i' times
    for (let j = 1; j <= i; j++) {
      // Append the current character to the row
      row += String.fromCharCode(64 + i) + ' '; // Convert ASCII value to character
    }

    // Print the row to the console
    console.log(row);
  }
}

// call the function
// characterPattern(5);

// Export the function for testing
module.exports = characterPattern;
