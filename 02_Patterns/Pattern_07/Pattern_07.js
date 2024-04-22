function pyramid(n) {
  // Outer loop for number of lines
  for (let i = 1; i <= n; i++) {
    // for spaces
    let spaces = ' '.repeat(n - i);

    // for stars
    let stars = '*'.repeat(2 * i - 1);

    // Each row consists of spaces, stars, and then spaces, printing as per the pattern.
    console.log(spaces + stars + spaces);
  }
}

// Call the function
// pyramid(5);

export default pyramid;
