const factorialNumbers = require('../05_Factorial Numbers/05_factorialNumbers');

describe('factorialNumbers', () => {
  test('Factorial of 1', () => {
    expect(factorialNumbers(1)).toBe(1);
  });

  test('Factorial of 2', () => {
    expect(factorialNumbers(2)).toBe(2);
  });

  test('Factorial of 3', () => {
    expect(factorialNumbers(3)).toBe(6);
  });

  test('Factorial of 4', () => {
    expect(factorialNumbers(4)).toBe(24);
  });

  test('Factorial of 5', () => {
    expect(factorialNumbers(5)).toBe(120);
  });
});
