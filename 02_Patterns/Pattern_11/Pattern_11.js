function zeroOnesTrianglePattern(n) {
  // Outer loop for number of rows/lines
  for (let i = 1; i <= n; i++) {
    let row = '';

    // Inner loop for columns to print the values in the row
    for (let j = 1; j <= i; j++) {
      // If the sum of line index and column index is even, print 1, else print 0
      row += (i + j) % 2 === 0 ? '1 ' : '0 ';
    }

    console.log(row);
  }
}

// Example usage:
zeroOnesTrianglePattern(5);
