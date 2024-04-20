function printDiamond(N) {
  // UPPER TRIANGLE
  // outer loop for number of lines
  for (let i = 1; i <= N; i++) {
    const spaces = ' '.repeat(N - i);
    const stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }

  // LOWER TRIANGLE
  // outer loop for number of lines
  for (let i = N - 1; i >= 1; i--) {
    const spaces = ' '.repeat(N - i);
    const stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

// Call the function
printDiamond(10);
