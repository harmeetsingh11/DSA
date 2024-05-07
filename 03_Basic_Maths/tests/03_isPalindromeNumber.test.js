const isPalindrome = require('../03_Palindrome Number/03_isPalindromeNumber');

test('51415 is a palindrome', () => {
  expect(isPalindrome(51415)).toBe(true);
});

test('1032 is not a palindrome', () => {
  expect(isPalindrome(1032)).toBe(false);
});

test('121 is a palindrome', () => {
  expect(isPalindrome(121)).toBe(true);
});

test('0 is a palindrome', () => {
  expect(isPalindrome(0)).toBe(true);
});

test('123454321 is a palindrome', () => {
  expect(isPalindrome(123454321)).toBe(true);
});

test('Non-palindrome negative number -121 returns false', () => {
  expect(isPalindrome(-121)).toBe(false);
});
