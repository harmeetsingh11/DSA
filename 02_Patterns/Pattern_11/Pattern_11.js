function zeroOnesTrianglePattern(N) {
  // Outer loop for number of rows/lines
  for (let i = 1; i <= lines; i++) {
    let line = '';

    // Inner loop for columns to print the values in the row
    for (let j = 1; j <= i; j++) {
      // If the sum of line index and column index is even, print 1, else print 0
      line += (i + j) % 2 === 0 ? '1 ' : '0 ';
    }

    console.log(line);
  }
}

// Example usage:
zeroOnesTrianglePattern(5);
