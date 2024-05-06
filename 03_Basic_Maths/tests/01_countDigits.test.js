const countDivisibleDigits = require('../01_Count Digits/01_countDigits');

test('Count divisible digits of 336', () => {
  expect(countDivisibleDigits(336)).toBe(3);
});

test('Count divisible digits of 35', () => {
  expect(countDivisibleDigits(35)).toBe(1);
});

test('Count divisible digits of 373', () => {
  expect(countDivisibleDigits(373)).toBe(0);
});

test('Count divisible digits of 10', () => {
  expect(countDivisibleDigits(10)).toBe(1);
});

test('Count divisible digits of 987654321', () => {
  expect(countDivisibleDigits(987654321)).toBe(3);
});
