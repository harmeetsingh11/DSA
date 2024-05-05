const compareNumbers = require('../03-if-else/03-if-else');

test('5 is greater than 3', () => {
  expect(compareNumbers(5, 3)).toBe('greater');
});

test('2 is equal to 2', () => {
  expect(compareNumbers(2, 2)).toBe('equal');
});

test('-3 is smaller than 1', () => {
  expect(compareNumbers(-3, 1)).toBe('smaller');
});

test('10 is greater than -5', () => {
  expect(compareNumbers(10, -5)).toBe('greater');
});

test('0 is equal to 0', () => {
  expect(compareNumbers(0, 0)).toBe('equal');
});
