function invertedAlphabeticalPattern(n) {
  // Loop for number of rows/lines
  for (let i = 1; i <= n; i++) {
    let row = '';

    // Loop for each column in the current row
    // and print characters from 'A' to 'A + n - i'
    for (let j = 1; j <= n - i + 1; j++) {
      // Convert ASCII value to character and append to the row
      row += String.fromCharCode(64 + j) + ' ';
    }

    // Print the row to the console
    console.log(row);
  }
}

// Call the function
// invertedAlphabeticalPattern(5);

// Export the function for testing
module.exports = invertedAlphabeticalPattern;
