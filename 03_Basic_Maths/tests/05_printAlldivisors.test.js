const printAllDivisorsBruteForce = require('../05_print all divisors/05_bruteforce_print_all_divisors');
const printAllDivisorsOptimal = require('../05_print all divisors/05_optimal_print_all_divisors');

describe('Print All Divisors', () => {
  const testCases = [
    { n: 36, expected: [1, 2, 3, 4, 6, 9, 12, 18, 36] },
    { n: 10, expected: [1, 2, 5, 10] },
    { n: 1, expected: [1] },
    { n: 7, expected: [1, 7] },
    { n: 0, expected: [] },
    { n: 15, expected: [1, 3, 5, 15] },
  ];

  testCases.forEach(({ n, expected }) => {
    test(`Print all divisors of ${n} (Brute Force)`, () => {
      // Mock console.log to capture output
      console.log = jest.fn();
      printAllDivisorsBruteForce(n);

      // Check if console.log was called with the expected divisors
      expected.forEach((divisor) => {
        expect(console.log).toHaveBeenCalledWith(divisor);
      });
    });

    test(`Print all divisors of ${n} (Optimal)`, () => {
      // Mock console.log to capture output
      console.log = jest.fn();
      printAllDivisorsOptimal(n);

      // Check if console.log was called with the expected divisors
      expect(console.log).toHaveBeenCalledWith(expected.join(' '));
    });
  });
});
