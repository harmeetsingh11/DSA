function calculateArea(ch, a) {
  // Check the choice 'ch'
  switch (ch) {
    case 1:
      // If choice is 1, calculate area of circle
      const r = a[0];
      const circleArea = Math.PI * r * r;
      return circleArea.toFixed(5); // Return area rounded to 5 decimal places
    case 2:
      // If choice is 2, calculate area of rectangle
      const l = a[0];
      const b = a[1];
      const rectangleArea = l * b;
      return rectangleArea.toFixed(5); // Return area rounded to 5 decimal places
    default:
      return 'Invalid choice'; // If choice is neither 1 nor 2
  }
}

// Example usage:
// console.log(calculateArea(2, [3, 2])); // Output: 6.00000
// console.log(calculateArea(1, [3])); // Output: 28.27433

//   Export the function for testing
module.exports = calculateArea;
