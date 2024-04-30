function characterPyramid(n) {
  // Loop through each row of the triangle
  for (let i = 1; i <= n; i++) {
    // Calculate the number of spaces
    let spaces = ' '.repeat(n - i);

    // Initialize the Unicode value for the first character 'A'
    let ch = 'A'.charCodeAt(0);

    // Calculate the midpoint of the row (used to determine the direction of characters)
    let mid = Math.floor((2 * i) / 2);

    // Initialize a string to store the characters for the current row
    let characters = '';

    // Loop through each column in the current row
    for (let j = 1; j < 2 * i; j++) {
      // Append the character corresponding to the Unicode value to the characters string
      characters += String.fromCharCode(ch);

      // Increment or decrement the Unicode value based on the position in the row
      if (j < mid) {
        ch++;
      } else {
        ch--;
      }
    }
    // Print the row with the appropriate spaces and characters
    console.log(spaces + characters + spaces);
  }
}

// Call the function
// characterPyramid(5);

// Export the function for testing
module.exports = characterPyramid;
