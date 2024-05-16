const isPalindrome = require('../07_Check Palindrome/07_checkPalindrome');

describe('Palindrome Checker', () => {
  test('Empty string is a palindrome', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('Single character is a palindrome', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('Even length palindrome', () => {
    expect(isPalindrome('abba')).toBe(true);
  });

  test('Odd length palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('Non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });
});
