const maxFrequency = require('../1966-frequency-of-the-most-frequent-element/1966_frequency-of-the-most-frequent-element');

describe('maxFrequency function', () => {
  it('Should return 3 for nums = [1, 2, 4], k = 5', () => {
    expect(maxFrequency([1, 2, 4], 5)).toBe(3);
  });

  it('Should return 2 for nums = [1, 4, 8, 13], k = 5', () => {
    expect(maxFrequency([1, 4, 8, 13], 5)).toBe(2);
  });

  it('Should return 1 for nums = [3, 9, 6], k = 2', () => {
    expect(maxFrequency([3, 9, 6], 2)).toBe(1);
  });
});
