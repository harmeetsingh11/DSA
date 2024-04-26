function rightTrianglePattern(n) {
  // Loop through each line of the triangle
  for (let i = 1; i <= n; i++) {
    let line = '';
    // Loop through each column in the current line
    for (let j = 1; j <= i; j++) {
      // Append the current line number followed by a space to the line
      line += i + ' ';
    }
    // Print the line to the console
    console.log(line);
  }
}

// Call the function
// rightTrianglePattern(5);

// Export the function for testing
module.exports = rightTrianglePattern;
