const zeroOnesTrianglePattern = require('../Pattern_11/Pattern_11');

describe('zeroOnesTrianglePattern', () => {
  it('should print the zero-ones triangle pattern for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    zeroOnesTrianglePattern(5);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['1 '],
      ['0 1 '],
      ['1 0 1 '],
      ['0 1 0 1 '],
      ['1 0 1 0 1 '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the zero-ones triangle pattern for n=7', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    zeroOnesTrianglePattern(7);
    expect(consoleSpy).toHaveBeenCalledTimes(7);
    expect(consoleSpy.mock.calls).toEqual([
      ['1 '],
      ['0 1 '],
      ['1 0 1 '],
      ['0 1 0 1 '],
      ['1 0 1 0 1 '],
      ['0 1 0 1 0 1 '],
      ['1 0 1 0 1 0 1 '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the zero-ones triangle pattern for n=9', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    zeroOnesTrianglePattern(9);
    expect(consoleSpy).toHaveBeenCalledTimes(9);
    expect(consoleSpy.mock.calls).toEqual([
      ['1 '],
      ['0 1 '],
      ['1 0 1 '],
      ['0 1 0 1 '],
      ['1 0 1 0 1 '],
      ['0 1 0 1 0 1 '],
      ['1 0 1 0 1 0 1 '],
      ['0 1 0 1 0 1 0 1 '],
      ['1 0 1 0 1 0 1 0 1 '],
    ]);
    consoleSpy.mockRestore();
  });
});
