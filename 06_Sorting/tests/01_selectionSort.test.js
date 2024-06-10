const selectionSort = require('../01_Selection_Sort/01_selectionSort'); // Adjust the path as necessary

test('sorts an array of integers in ascending order', () => {
  expect(selectionSort([64, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 64]);
});

test('sorts an already sorted array', () => {
  expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('sorts an array with negative numbers', () => {
  expect(selectionSort([3, -2, -1, 5, 4])).toEqual([-2, -1, 3, 4, 5]);
});

test('sorts an array with duplicate values', () => {
  expect(selectionSort([3, 1, 2, 1, 3])).toEqual([1, 1, 2, 3, 3]);
});

test('sorts an array with a single element', () => {
  expect(selectionSort([1])).toEqual([1]);
});
