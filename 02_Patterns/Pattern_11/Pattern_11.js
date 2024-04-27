function zeroOnesTrianglePattern(N) {
  // Outer loop for number of rows/lines
  for (let i = 1; i <= N; i++) {
    let start;

    if (i % 2 === 0) {
      start = 0; // If i is even, start with 0
    } else {
      start = 1; // If i is odd, start with 1
    }

    let row = '';

    // Inner loop for columns to print the values in the row
    for (let j = 1; j <= i; j++) {
      row += start + ' ';

      // toggle start from 1 to 0 and 0 to 1
      start = 1 - start;
    }

    console.log(row);
  }
}

// Example usage:
zeroOnesTrianglePattern(5);
