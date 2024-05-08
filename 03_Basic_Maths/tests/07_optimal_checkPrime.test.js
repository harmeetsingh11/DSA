const checkPrimeOptimal = require('../07_Check Prime Number/07_optimal_checkPrime');

test('1 is not a prime number', () => {
  expect(checkPrimeOptimal(1)).toBe('NO');
});

test('2 is a prime number', () => {
  expect(checkPrimeOptimal(2)).toBe('YES');
});

test('13 is a prime number', () => {
  expect(checkPrimeOptimal(13)).toBe('YES');
});

test('20 is not a prime number', () => {
  expect(checkPrimeOptimal(20)).toBe('NO');
});

test('29 is a prime number', () => {
  expect(checkPrimeOptimal(29)).toBe('YES');
});
