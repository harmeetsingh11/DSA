function concentricSquarePattern(n) {
  // Outer loop for number of rows/lines
  for (let i = 1; i < 2 * n; i++) {
    let row = '';
    // Inner loop for number of columns
    for (let j = 1; j < 2 * n; j++) {
      // Calculate the distance from the current cell to the edges of the grid

      // the distance from the current cell to the top edge of the grid
      let top_dist = i;

      // the distance from the current cell to the left edge of the grid
      let left_dist = j;

      // the distance from the current cell to the bottom edge of the grid
      let bottom_dist = 2 * n - i;

      // the distance from the current cell to the right edge of the grid
      let right_dist = 2 * n - j;

      //   Math.min(top,left,right,bottom) will print the pattern in reverse fashion (1’s at the border of the square, then 2 in the inner perimeter, then 3, and so on)

      let minDist = Math.min(top_dist, bottom_dist, left_dist, right_dist);

      //  (n+1) - Math.min(top,left,right, bottom) will print the given pattern (N at the border of the square, then N-1 in the inner perimeter, centermost element with the integer 1)
      row += n + 1 - minDist + ' ';
    }
    // Output the row to the console
    console.log(row);
  }
}

// Call the function
// concentricSquarePattern(4);

// Export the function for testing
module.exports = concentricSquarePattern;
