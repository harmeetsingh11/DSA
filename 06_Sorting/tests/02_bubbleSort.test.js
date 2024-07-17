const bubbleSortIterative = require('../02_Bubble_Sort/02_iterativeBubbleSort');

test('sorts an array of positive numbers', () => {
  const arr = [5, 3, 8, 4, 2];
  expect(bubbleSortIterative(arr)).toEqual([2, 3, 4, 5, 8]);
});

test('sorts an already sorted array', () => {
  const arr = [1, 2, 3, 4, 5];
  expect(bubbleSortIterative(arr)).toEqual([1, 2, 3, 4, 5]);
});

test('sorts an array with negative numbers', () => {
  const arr = [5, -3, 8, 4, -2];
  expect(bubbleSortIterative(arr)).toEqual([-3, -2, 4, 5, 8]);
});

test('sorts an array with duplicate numbers', () => {
  const arr = [5, 3, 8, 3, 2];
  expect(bubbleSortIterative(arr)).toEqual([2, 3, 3, 5, 8]);
});

test('sorts an array with a single element', () => {
  const arr = [5];
  expect(bubbleSortIterative(arr)).toEqual([5]);
});
