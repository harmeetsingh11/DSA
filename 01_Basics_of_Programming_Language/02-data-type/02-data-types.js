function dataTypes(type) {
  // Checking 'type' with all the data types we know.
  if (type === 'Integer') {
    return 4;
  } else if (type === 'Long') {
    return 8;
  } else if (type === 'Float') {
    return 4;
  } else if (type === 'Double') {
    return 8;
  } else if (type === 'Character') {
    return 1;
  } else {
    // 'type' should have matched with some data type above, this line should not be reached
    return -1;
  }
}

// Call the function with sample inputs
// console.log(dataTypes('Long')); // Output: 8

// Export the function for testing
module.exports = dataTypes;
