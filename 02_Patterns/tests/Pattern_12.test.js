const numberPyramid = require('../Pattern_12/Pattern_12');

describe('numberPyramid', () => {
  it('should print the number pyramid for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    numberPyramid(5);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['1                 1 '],
      ['1 2             2 1 '],
      ['1 2 3         3 2 1 '],
      ['1 2 3 4     4 3 2 1 '],
      ['1 2 3 4 5 5 4 3 2 1 '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the number pyramid for n=7', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    numberPyramid(7);
    expect(consoleSpy).toHaveBeenCalledTimes(7);
    expect(consoleSpy.mock.calls).toEqual([
      ['1                       1 '],
      ['1 2                   2 1 '],
      ['1 2 3               3 2 1 '],
      ['1 2 3 4           4 3 2 1 '],
      ['1 2 3 4 5       5 4 3 2 1 '],
      ['1 2 3 4 5 6   6 5 4 3 2 1 '],
      ['1 2 3 4 5 6 7 6 5 4 3 2 1 '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the number pyramid for n=9', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    numberPyramid(9);
    expect(consoleSpy).toHaveBeenCalledTimes(9);
    expect(consoleSpy.mock.calls).toEqual([
      ['1                                 1 '],
      ['1 2                             2 1 '],
      ['1 2 3                         3 2 1 '],
      ['1 2 3 4                     4 3 2 1 '],
      ['1 2 3 4 5                 5 4 3 2 1 '],
      ['1 2 3 4 5 6             6 5 4 3 2 1 '],
      ['1 2 3 4 5 6 7         7 6 5 4 3 2 1 '],
      ['1 2 3 4 5 6 7 8     8 7 6 5 4 3 2 1 '],
      ['1 2 3 4 5 6 7 8 9 9 8 7 6 5 4 3 2 1 '],
    ]);
    consoleSpy.mockRestore();
  });
});
