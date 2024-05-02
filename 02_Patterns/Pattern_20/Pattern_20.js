function butterflyPattern(n) {
  // Outer loop for number of rows/lines
  for (let i = 1; i < 2 * n; i++) {
    let stars, spaces;

    // Calculate stars and spaces based on the row number
    // For upper half of the pattern
    if (i <= n) {
      stars = i;
      spaces = 2 * n - 2 * i;
    }
    // for lower half of the pattern
    else {
      stars = 2 * n - i;
      spaces = 2 * i - 2 * n;
    }

    let row = '';

    // Print stars
    for (let j = 1; j <= stars; j++) {
      row += '*';
    }

    // Print spaces
    for (let j = 1; j <= spaces; j++) {
      row += ' ';
    }

    // Print stars again
    for (let j = 1; j <= stars; j++) {
      row += '*';
    }

    // Output the row
    console.log(row);
  }
}

// call the function
// butterflyPattern(5);

// Export the function for testing
module.exports = butterflyPattern;
