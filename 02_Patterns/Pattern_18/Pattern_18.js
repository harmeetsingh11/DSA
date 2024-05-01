function reverseAlphabticalTriangle(n) {
  // Loop through each row
  for (let i = 1; i <= n; i++) {
    let row = '';

    // Print characters for each row
    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(65 + (n - i) + (j - 1)) + ' ';
    }

    // Print the row to the console
    console.log(row);
  }
}

// Call the function
// reverseAlphabticalTriangle(5);

// Export the function for testing
module.exports = reverseAlphabticalTriangle;
