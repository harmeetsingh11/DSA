const printNto1 = require('../03_Print N to 1/03_printNto1'); // Import the function

test('Print numbers from 5 to 1', () => {
  expect(printNto1(5)).toEqual([5, 4, 3, 2, 1]);
});

test('Print numbers from 10 to 1', () => {
  expect(printNto1(10)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
});

test('Print numbers from 1 to 1', () => {
  expect(printNto1(1)).toEqual([1]);
});

test('Print numbers from 3 to 1', () => {
  expect(printNto1(3)).toEqual([3, 2, 1]);
});

test('Print numbers from 7 to 1', () => {
  expect(printNto1(7)).toEqual([7, 6, 5, 4, 3, 2, 1]);
});
