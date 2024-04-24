function invertedRightTriangleStarPattern(n) {
  // Loop through each row of the triangle
  for (let i = 1; i <= n; i++) {
    let row = '';
    // Loop through each column in the current row
    for (let j = 1; j <= n + 1 - i; j++) {
      // Append the star followed by a space to the row
      row += '* ';
    }
    // Print the row to the console
    console.log(row);
  }
}

// Call the function
// invertedRightTriangleStarPattern(10);

// Export the function for testing
export default invertedRightTriangleStarPattern;
