function hollowSquarePattern(n) {
  // outer loop for number of rows/lines
  for (let i = 1; i <= n; i++) {
    let row = '';
    // inner loop for columns
    for (let j = 1; j <= n; j++) {
      // conditions when star will be printed
      if (i === 1 || i === n || j === 1 || j === n) {
        row += '*';
      } else {
        row += ' ';
      }
    }
    console.log(row);
  }
}

// call the function
// hollowSquarePattern(4);

// Export the function for testing
module.exports = hollowSquarePattern;
