const findMaxAverage = require('../643-maximum-average-subarray-i/643_maximum-average-subarray-i');

describe('findMaxAverage', () => {
  it('should return the correct maximum average for the given input', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBeCloseTo(12.75);
  });

  it('should return the correct value when array has only one element', () => {
    expect(findMaxAverage([5], 1)).toBeCloseTo(5.0);
  });

  it('should handle arrays with negative numbers', () => {
    expect(findMaxAverage([-1, -2, -3, -4, -5], 3)).toBeCloseTo(-2.0);
  });

  it('should handle arrays with all positive numbers', () => {
    expect(findMaxAverage([10, 20, 30, 40, 50], 2)).toBeCloseTo(45.0);
  });
});
