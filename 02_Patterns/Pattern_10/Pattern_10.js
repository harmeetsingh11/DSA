function printTriangle(N) {
  // outer loop for number of rows/lines
  for (let i = 1; i < 2 * N; i++) {
    // stars would be equal to the row no. until first half
    let stars = i;

    // for the second half of the rotated triangle.
    if (i > N) {
      stars = 2 * N - i;
    }

    let row = '';
    // for printing the stars in each row
    for (let j = 1; j <= stars; j++) {
      row += '* ';
    }
    console.log(row);
  }
}

// Call the function
printTriangle(5);
