function alphabeticalTrianglePattern(n) {
  // Loop for each row/line
  for (let i = 1; i <= n; i++) {
    let row = '';

    // Loop for each column to print letters for each row
    for (let j = 1; j <= i; j++) {
      // Append the current letter to the row
      // String.fromCharCode() function converts ASCII values into characters
      row += String.fromCharCode(64 + j) + ' ';
    }

    console.log(row);
  }
}

// Call the function
// alphabeticalTrianglePattern(5);

// Export the function for testing
module.exports = alphabeticalTrianglePattern;
