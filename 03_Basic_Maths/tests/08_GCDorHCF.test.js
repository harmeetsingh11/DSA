const calcGCDBruteForce = require('../08_GCD or HCF/08_Bruteforce_GCDorHCF');
const calcGCDOptimal = require('../08_GCD or HCF/08_optimal_GCDorHCF');

describe('GCD functions', () => {
  const testCases = [
    { n: 10, m: 15, expected: 5 },
    { n: 24, m: 36, expected: 12 },
    { n: 17, m: 29, expected: 1 },
    { n: 18, m: 24, expected: 6 },
    { n: 30, m: 40, expected: 10 },
  ];

  testCases.forEach(({ n, m, expected }) => {
    test(`GCD of ${n} and ${m} is ${expected} (Brute Force)`, () => {
      expect(calcGCDBruteForce(n, m)).toBe(expected);
    });

    test(`GCD of ${n} and ${m} is ${expected} (Optimal)`, () => {
      expect(calcGCDOptimal(n, m)).toBe(expected);
    });
  });
});
