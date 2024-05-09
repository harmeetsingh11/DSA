const calcGCDBruteForce = require('../08_GCD or HCF/08_Bruteforce_GCDorHCF');

test('GCD of 10 and 15 is 5', () => {
  expect(calcGCDBruteForce(10, 15)).toBe(5);
});

test('GCD of 24 and 36 is 12', () => {
  expect(calcGCDBruteForce(24, 36)).toBe(12);
});

test('GCD of 17 and 29 is 1', () => {
  expect(calcGCDBruteForce(17, 29)).toBe(1);
});

test('GCD of 18 and 24 is 6', () => {
  expect(calcGCDBruteForce(18, 24)).toBe(6);
});

test('GCD of 30 and 40 is 10', () => {
  expect(calcGCDBruteForce(30, 40)).toBe(10);
});
