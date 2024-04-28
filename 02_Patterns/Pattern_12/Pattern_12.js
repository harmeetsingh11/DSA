function numberPyramid(n) {
  // Loop through each row
  for (let i = 1; i <= n; i++) {
    let row = '';

    // Print numbers from 1 to i
    for (let j = 1; j <= i; j++) {
      row += j + ' ';
    }

    // Print spaces for the right half
    for (let k = 1; k <= 2 * (n - i); k++) {
      row += '  ';
    }

    // Print numbers from i to 1 in reverse order for the right half
    for (let l = i; l >= 1; l--) {
      row += l + ' ';
    }

    console.log(row);
  }
}

// Call the function
// numberPyramid(5);

// Export the function for testing
module.exports = numberPyramid;
