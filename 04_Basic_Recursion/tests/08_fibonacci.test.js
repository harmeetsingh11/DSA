const generateFibonacciIterative = require('../08_Print Fibonacci Series/08_iterativeFibonacci');
const generateNfibonacciRecursive = require('../08_Print Fibonacci Series/08_recursiveFibonacci');

describe('Iterative Fibonacci', () => {
  test('Generate Fibonacci series till 0', () => {
    const result = generateFibonacciIterative(0);
    expect(result).toEqual([0]);
  });

  test('Generate Fibonacci series till 5', () => {
    const result = generateFibonacciIterative(5);
    expect(result).toEqual([0, 1, 1, 2, 3]);
  });

  test('Generate Fibonacci series till 10', () => {
    const result = generateFibonacciIterative(10);
    expect(result).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  test('Generate Fibonacci series till 20', () => {
    const result = generateFibonacciIterative(20);
    expect(result).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181,
    ]);
  });

  test('Generate Fibonacci series till 30', () => {
    const result = generateFibonacciIterative(30);
    expect(result).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418,
      317811, 514229,
    ]);
  });
});

describe('Recursive Fibonacci', () => {
  test('Generate 0th Fibonacci number', () => {
    const result = generateNfibonacciRecursive(0);
    expect(result).toBe(0);
  });

  test('Generate 5th Fibonacci number', () => {
    const result = generateNfibonacciRecursive(5);
    expect(result).toBe(5);
  });

  test('Generate 10th Fibonacci number', () => {
    const result = generateNfibonacciRecursive(10);
    expect(result).toBe(55);
  });

  test('Generate 20th Fibonacci number', () => {
    const result = generateNfibonacciRecursive(20);
    expect(result).toBe(6765);
  });

  test('Generate 30th Fibonacci number', () => {
    const result = generateNfibonacciRecursive(30);
    expect(result).toBe(832040);
  });
});
