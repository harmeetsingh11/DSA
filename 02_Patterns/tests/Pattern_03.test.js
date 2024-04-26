const rightTriangleNumberPattern = require('../Pattern_03/Pattern_03');

describe('rightTriangleNumberPattern', () => {
  it('should print the right triangle number pattern for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    rightTriangleNumberPattern(5);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['1 '],
      ['1 2 '],
      ['1 2 3 '],
      ['1 2 3 4 '],
      ['1 2 3 4 5 '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the right triangle number pattern for n=7', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    rightTriangleNumberPattern(7);
    expect(consoleSpy).toHaveBeenCalledTimes(7);
    expect(consoleSpy.mock.calls).toEqual([
      ['1 '],
      ['1 2 '],
      ['1 2 3 '],
      ['1 2 3 4 '],
      ['1 2 3 4 5 '],
      ['1 2 3 4 5 6 '],
      ['1 2 3 4 5 6 7 '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the right triangle number pattern for n=9', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    rightTriangleNumberPattern(9);
    expect(consoleSpy).toHaveBeenCalledTimes(9);
    expect(consoleSpy.mock.calls).toEqual([
      ['1 '],
      ['1 2 '],
      ['1 2 3 '],
      ['1 2 3 4 '],
      ['1 2 3 4 5 '],
      ['1 2 3 4 5 6 '],
      ['1 2 3 4 5 6 7 '],
      ['1 2 3 4 5 6 7 8 '],
      ['1 2 3 4 5 6 7 8 9 '],
    ]);
    consoleSpy.mockRestore();
  });
});
