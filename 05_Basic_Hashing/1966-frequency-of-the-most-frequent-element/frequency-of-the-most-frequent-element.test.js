const maxFrequency = require('./frequency-of-the-most-frequent-element');

describe('maxFrequency function', () => {
  it('Example 1: [1, 2, 4], k = 5', () => {
    expect(maxFrequency([1, 2, 4], 5)).toBe(3);
  });

  it('Example 2: [1, 4, 8, 13], k = 5', () => {
    expect(maxFrequency([1, 4, 8, 13], 5)).toBe(2);
  });

  it('Example 3: [3, 9, 6], k = 2', () => {
    expect(maxFrequency([3, 9, 6], 2)).toBe(1);
  });
});
