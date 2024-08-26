const insertionSort = require('../03_Insertion_Sort/03_insertionSort');

describe('insertionSort', () => {
  test('should sort an array of positive integers', () => {
    expect(insertionSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  test('should handle an empty array', () => {
    expect(insertionSort([])).toEqual([]);
  });

  test('should handle an array with one element', () => {
    expect(insertionSort([1])).toEqual([1]);
  });

  test('should sort an array of negative integers', () => {
    expect(insertionSort([-3, -1, -7, -4, -2])).toEqual([-7, -4, -3, -2, -1]);
  });

  test('should sort an array with duplicate elements', () => {
    expect(insertionSort([4, 2, 2, 8, 4])).toEqual([2, 2, 4, 4, 8]);
  });
});
