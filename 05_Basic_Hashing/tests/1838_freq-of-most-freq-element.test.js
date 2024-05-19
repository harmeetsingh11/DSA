const maxFrequency = require('../1838_freq-of-most-freq-element/1838_freqOfMostFreqElement');
describe('maxFrequency', () => {
  test('Example 1', () => {
    expect(maxFrequency([1, 2, 4], 5)).toBe(3);
  });

  test('Example 2', () => {
    expect(maxFrequency([1, 4, 8, 13], 5)).toBe(2);
  });

  test('Example 3', () => {
    expect(maxFrequency([3, 9, 6], 2)).toBe(1);
  });

  test('All elements already same', () => {
    expect(maxFrequency([5, 5, 5], 3)).toBe(3);
  });

  test('One large element', () => {
    expect(maxFrequency([1, 2, 3, 10], 5)).toBe(3);
  });

  test('No operations needed', () => {
    expect(maxFrequency([5, 5, 5, 5, 5], 0)).toBe(5);
  });
});
