function fullSquareStarPattern(n) {
  // Loop through each line of the triangle
  for (let i = 1; i <= n; i++) {
    let line = '';
    // Loop through each column in the current line
    for (let j = 1; j <= n; j++) {
      // Append the star followed by a space to the line
      line += '* ';
    }
    // Print the line to the console
    console.log(line);
  }
}

// Call the function
// fullSquareStarPattern(5);

// Export the function for testing
export default fullSquareStarPattern;
