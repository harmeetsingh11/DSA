const printAllDivisorsBruteForce = require('../05_print all divisors/05_bruteforce_print_all_divisors');

test('Print all divisors of 36', () => {
  // Define expected output
  const expectedOutput = [1, 2, 3, 4, 6, 9, 12, 18, 36];

  // Mock console.log to capture output
  console.log = jest.fn();
  printAllDivisorsBruteForce(36);

  // Check if console.log was called with the expected divisors
  expectedOutput.forEach((divisor) => {
    expect(console.log).toHaveBeenCalledWith(divisor);
  });
});

test('Print all divisors of 10', () => {
  // Define expected output
  const expectedOutput = [1, 2, 5, 10];

  // Mock console.log to capture output
  console.log = jest.fn();
  printAllDivisorsBruteForce(10);

  // Check if console.log was called with the expected divisors
  expectedOutput.forEach((divisor) => {
    expect(console.log).toHaveBeenCalledWith(divisor);
  });
});

test('Print all divisors of 1', () => {
  // Define expected output
  const expectedOutput = [1];

  // Mock console.log to capture output
  console.log = jest.fn();
  printAllDivisorsBruteForce(1);

  // Check if console.log was called with the expected divisors
  expectedOutput.forEach((divisor) => {
    expect(console.log).toHaveBeenCalledWith(divisor);
  });
});

test('Print all divisors of 7', () => {
  // Define expected output
  const expectedOutput = [1, 7];

  // Mock console.log to capture output
  console.log = jest.fn();
  printAllDivisorsBruteForce(7);

  // Check if console.log was called with the expected divisors
  expectedOutput.forEach((divisor) => {
    expect(console.log).toHaveBeenCalledWith(divisor);
  });
});

test('Print all divisors of 0', () => {
  // Define expected output
  const expectedOutput = [];

  // Mock console.log to capture output
  console.log = jest.fn();
  printAllDivisorsBruteForce(0);

  // Check if console.log was called with the expected divisors
  expect(console.log).not.toHaveBeenCalled();
});
