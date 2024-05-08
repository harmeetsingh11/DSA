const printAllDivisorsOptimal = require('../05_print all divisors/05_optimal_print_all_divisors');

test('Print all divisors of 36', () => {
  // Mock console.log to capture output
  console.log = jest.fn();
  printAllDivisorsOptimal(36);

  // Check if console.log was called with the expected divisors
  expect(console.log).toHaveBeenCalledWith('1 2 3 4 6 9 12 18 36');
});

test('Print all divisors of 10', () => {
  // Mock console.log to capture output
  console.log = jest.fn();
  printAllDivisorsOptimal(10);

  // Check if console.log was called with the expected divisors
  expect(console.log).toHaveBeenCalledWith('1 2 5 10');
});

test('Print all divisors of 1', () => {
  // Mock console.log to capture output
  console.log = jest.fn();
  printAllDivisorsOptimal(1);

  // Check if console.log was called with the expected divisors
  expect(console.log).toHaveBeenCalledWith('1');
});

test('Print all divisors of 7', () => {
  // Mock console.log to capture output
  console.log = jest.fn();
  printAllDivisorsOptimal(7);

  // Check if console.log was called with the expected divisors
  expect(console.log).toHaveBeenCalledWith('1 7');
});

test('Print all divisors of 15', () => {
  // Mock console.log to capture output
  console.log = jest.fn();
  printAllDivisorsOptimal(15);

  // Check if console.log was called with the expected divisors
  expect(console.log).toHaveBeenCalledWith('1 3 5 15');
});
