const sumOfAllDivisorsBruteForce = require('../06_Sum of all divisors/06_bruteforce_sumOfDivisors');

test('Sum of divisors of 1 is 1', () => {
  expect(sumOfAllDivisorsBruteForce(1)).toBe(1);
});

test('Sum of divisors of 10 is 87', () => {
  expect(sumOfAllDivisorsBruteForce(10)).toBe(87);
});

test('Sum of divisors of 20 is 339', () => {
  expect(sumOfAllDivisorsBruteForce(20)).toBe(339);
});

test('Sum of divisors of 36 is 1098', () => {
  expect(sumOfAllDivisorsBruteForce(36)).toBe(1098);
});

test('Sum of divisors of 100 is 8299', () => {
  expect(sumOfAllDivisorsBruteForce(100)).toBe(8299);
});
