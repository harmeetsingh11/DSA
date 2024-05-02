function hollowDiamondStarPattern(n) {
  // UPPER TRIANGLE
  // Outer loop for number of lines
  for (let i = 1; i <= n; i++) {
    let row = '';

    // Stars
    for (let j = 1; j <= n + 1 - i; j++) {
      row += '*';
    }

    // Spaces
    for (let j = 1; j <= 2 * i - 2; j++) {
      row += ' ';
    }

    // Stars
    for (let j = 1; j <= n + 1 - i; j++) {
      row += '*';
    }

    console.log(row);
  }

  // LOWER TRIANGLE
  // Outer loop for number of lines
  for (let i = 1; i <= n; i++) {
    let row = '';

    // Stars
    for (let j = 1; j <= i; j++) {
      row += '*';
    }

    // Spaces
    for (let j = 1; j <= 2 * n - 2 * i; j++) {
      row += ' ';
    }

    // Stars
    for (let j = 1; j <= i; j++) {
      row += '*';
    }

    console.log(row);
  }
}

// Call the function
// hollowDiamondStarPattern(15);

// Export the function for testing
module.exports = hollowDiamondStarPattern;
