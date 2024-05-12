const generateArray1toN = require('../01_Print 1 to N/01_print1toN');

test('Generate array from 1 to 5 for n=5', () => {
  expect(generateArray1toN(5)).toEqual([1, 2, 3, 4, 5]);
});

test('Generate array from 1 to 1 for n=1', () => {
  expect(generateArray1toN(1)).toEqual([1]);
});

test('Generate array from 1 to 10 for n=10', () => {
  expect(generateArray1toN(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('Returns empty array [] for n=0', () => {
  expect(generateArray1toN(0)).toEqual([]);
});

test('Generate array from 1 to 3 for n=3', () => {
  expect(generateArray1toN(3)).toEqual([1, 2, 3]);
});
