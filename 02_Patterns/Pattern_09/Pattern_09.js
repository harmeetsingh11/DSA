function printDiamond(N) {
  // UPPER TRIANGLE
  // outer loop for number of lines
  for (let i = 1; i <= N; i++) {
    // for spaces
    let spaces = ' '.repeat(N - i);

    // for stars
    let stars = '*'.repeat(2 * i - 1);

    // Each row consists of spaces, stars, and then spaces, printing as per the pattern.
    console.log(spaces + stars + spaces);
  }

  // LOWER TRIANGLE
  // outer loop for number of lines
  for (let i = N - 1; i >= 1; i--) {
    // for spaces
    let spaces = ' '.repeat(N - i);

    // for stars
    let stars = '*'.repeat(2 * i - 1);

    // Each row consists of spaces, stars, and then spaces, printing as per the pattern.
    console.log(spaces + stars + spaces);
  }
}

// Call the function
// printDiamond(5);

export default printDiamond;
