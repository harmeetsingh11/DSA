const sumFirstNrecursive = require('../04_Sum Of First N Numbers/04_recursiveSumFirstN');
const sumFirstNoptimal = require('../04_Sum Of First N Numbers/04_optimalSumFirstN');

describe('sumFirstNrecursive', () => {
  test('Sum of first 5 numbers', () => {
    expect(sumFirstNrecursive(5)).toBe(15);
  });

  test('Sum of first 10 numbers', () => {
    expect(sumFirstNrecursive(10)).toBe(55);
  });

  test('Sum of first 1 number', () => {
    expect(sumFirstNrecursive(1)).toBe(1);
  });

  test('Sum of first 0 numbers', () => {
    expect(sumFirstNrecursive(0)).toBe(0);
  });

  test('Sum of first 3 numbers', () => {
    expect(sumFirstNrecursive(3)).toBe(6);
  });
});

describe('sumFirstNoptimal', () => {
  test('Sum of first 5 numbers', () => {
    expect(sumFirstNoptimal(5)).toBe(15);
  });

  test('Sum of first 10 numbers', () => {
    expect(sumFirstNoptimal(10)).toBe(55);
  });

  test('Sum of first 1 number', () => {
    expect(sumFirstNoptimal(1)).toBe(1);
  });

  test('Sum of first 0 numbers', () => {
    expect(sumFirstNoptimal(0)).toBe(0);
  });

  test('Sum of first 3 numbers', () => {
    expect(sumFirstNoptimal(3)).toBe(6);
  });
});
