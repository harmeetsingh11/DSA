const reverseNumber = require('../02_Reverse a Number/02_reverseNumber');

test('Reverse of 1234 is 4321', () => {
  expect(reverseNumber(1234)).toBe(4321);
});

test('Reverse of 1980 is 891', () => {
  expect(reverseNumber(1980)).toBe(891);
});

test('Reverse of 0 is 0', () => {
  expect(reverseNumber(0)).toBe(0);
});

test('Reverse of 987654321 is 123456789', () => {
  expect(reverseNumber(987654321)).toBe(123456789);
});

test('Reverse of 10001 is 10001', () => {
  expect(reverseNumber(10001)).toBe(10001);
});

test('Reverse of 123456789 is 987654321', () => {
  expect(reverseNumber(123456789)).toBe(987654321);
});
