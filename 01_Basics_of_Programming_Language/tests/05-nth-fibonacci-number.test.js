const fibonacci = require('../05-nth-fibonacci-number/05-nth-fibonacci-number');

describe('Fibonacci Function', () => {
  // Test case for n = 1
  test('Fibonacci of n = 1 should return 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  // Test case for n = 2
  test('Fibonacci of n = 2 should return 1', () => {
    expect(fibonacci(2)).toBe(1);
  });

  // Test case for n = 6
  test('Fibonacci of n = 6 should return 8', () => {
    expect(fibonacci(6)).toBe(8);
  });

  // Additional test case for n = 10
  test('Fibonacci of n = 10 should return 55', () => {
    expect(fibonacci(10)).toBe(55);
  });

  // Additional test case for n = 20
  test('Fibonacci of n = 20 should return 6765', () => {
    expect(fibonacci(20)).toBe(6765);
  });
});
