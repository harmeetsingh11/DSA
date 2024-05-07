const checkArmstrong = require('../04_Armstrong Number/04_isArmstrongNumber');

test('1 is an Armstrong number', () => {
  expect(checkArmstrong(1)).toBe(true);
});

test('103 is not an Armstrong number', () => {
  expect(checkArmstrong(103)).toBe(false);
});

test('1634 is an Armstrong number', () => {
  expect(checkArmstrong(1634)).toBe(true);
});

test('0 is an Armstrong number', () => {
  expect(checkArmstrong(0)).toBe(true);
});

test('371 is an Armstrong number', () => {
  expect(checkArmstrong(371)).toBe(true);
});
