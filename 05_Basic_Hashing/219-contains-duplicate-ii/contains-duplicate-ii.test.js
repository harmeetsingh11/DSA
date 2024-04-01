const containsNearbyDuplicate = require('./contains-duplicate-ii');

describe('containsNearbyDuplicate', () => {
  it('Should return true for nums = [1,2,3,1], k = 3', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
  });

  it('Should return true for nums = [1,0,1,1], k = 1', () => {
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
  });

  it('Should return false for nums = [1,2,3,1,2,3], k = 2', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
  });
});
