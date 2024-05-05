const calculateArea = require('../04-switch-case/04-switch-case');

// Test case for calculating area of a circle
test('Calculate area of a circle', () => {
  expect(calculateArea(1, [3])).toBe('28.27433');
  expect(calculateArea(1, [5])).toBe('78.53982');
});

// Test case for calculating area of a rectangle
test('Calculate area of a rectangle', () => {
  expect(calculateArea(2, [3, 2])).toBe('6.00000');
  expect(calculateArea(2, [5, 4])).toBe('20.00000');
  expect(calculateArea(2, [1000, 2000])).toBe('2000000.00000');
});

// Test case for invalid choice
test('Invalid choice', () => {
  expect(calculateArea(3, [3])).toBe('Invalid choice');
  expect(calculateArea(0, [5])).toBe('Invalid choice');
});
