const rightTrianglePattern = require('../Pattern_04/Pattern_04');

describe('rightTrianglePattern', () => {
  it('should print the right triangle pattern for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    rightTrianglePattern(5);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['1 '],
      ['2 2 '],
      ['3 3 3 '],
      ['4 4 4 4 '],
      ['5 5 5 5 5 '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the right triangle pattern for n=7', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    rightTrianglePattern(7);
    expect(consoleSpy).toHaveBeenCalledTimes(7);
    expect(consoleSpy.mock.calls).toEqual([
      ['1 '],
      ['2 2 '],
      ['3 3 3 '],
      ['4 4 4 4 '],
      ['5 5 5 5 5 '],
      ['6 6 6 6 6 6 '],
      ['7 7 7 7 7 7 7 '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the right triangle pattern for n=9', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    rightTrianglePattern(9);
    expect(consoleSpy).toHaveBeenCalledTimes(9);
    expect(consoleSpy.mock.calls).toEqual([
      ['1 '],
      ['2 2 '],
      ['3 3 3 '],
      ['4 4 4 4 '],
      ['5 5 5 5 5 '],
      ['6 6 6 6 6 6 '],
      ['7 7 7 7 7 7 7 '],
      ['8 8 8 8 8 8 8 8 '],
      ['9 9 9 9 9 9 9 9 9 '],
    ]);
    consoleSpy.mockRestore();
  });
});
