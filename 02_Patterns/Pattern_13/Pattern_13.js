function numberTriangle(n) {
  let currentNumber = 1;

  // Loop for number of lines/rows
  for (let i = 1; i <= n; i++) {
    let row = '';

    // loop for number of columns to print numbers for each line
    for (let j = 1; j <= i; j++) {
      // Append the current number to the row
      row += currentNumber + ' ';
      // Increment the current number for the next iteration
      currentNumber++;
    }

    // Print the row to the console
    console.log(row);
  }
}

// Call the function
// numberTriangle(5);

// Export the function for testing
module.exports = numberTriangle;
