function compareNumbers(a, b) {
  if (a < b) {
    return 'smaller';
  } else if (a > b) {
    return 'greater';
  } else {
    return 'equal';
  }
}

// Call the function using sample input
// console.log(compareNumbers(5, 3)); // Output: greater

// Export the function for testing
module.exports = compareNumbers;
