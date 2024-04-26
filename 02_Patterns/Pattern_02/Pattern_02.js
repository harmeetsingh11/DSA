function rightTriangleStarPattern(n) {
  // Loop through each line of the triangle
  for (let i = 1; i <= n; i++) {
    let line = '';
    // Loop through each column in the current line
    for (let j = 1; j <= i; j++) {
      // Append the star followed by a space to the line
      line += '* ';
    }
    // Print the line to the console
    console.log(line);
  }
}

// Call the function
// rightTriangleStarPattern(5);

// Export the function for testing
module.exports = rightTriangleStarPattern;
