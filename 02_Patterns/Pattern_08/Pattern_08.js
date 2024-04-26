function invertedPyramid(n) {
  // outer loop fo number of lines
  for (let i = 1; i <= n; i++) {
    // for spaces
    let spaces = ' '.repeat(i - 1);

    // for stars
    let stars = '*'.repeat(2 * n - (2 * i - 1));

    // Each row consists of spaces, stars, and then spaces, printing as per the pattern.
    console.log(spaces + stars + spaces);
  }
}

// Call the function
// invertedPyramid(10);

module.exports = invertedPyramid;
