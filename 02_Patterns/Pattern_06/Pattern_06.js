function invertedRightAngleTrianglePattern(n) {
  // Loop through each row of the triangle
  for (let i = 1; i <= n; i++) {
    let row = '';
    // Loop through each column in the current row
    for (let j = 1; j <= n + 1 - i; j++) {
      // Append the current column number followed by a space to the row
      row += j + ' ';
    }
    // Print the row to the console
    console.log(row);
  }
}

// Call the function
invertedRightAngleTrianglePattern(9);

// Export the function for testing
export default invertedRightAngleTrianglePattern;
