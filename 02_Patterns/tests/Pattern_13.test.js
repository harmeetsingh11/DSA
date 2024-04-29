const numberTriangle = require('../Pattern_13/Pattern_13');

describe('numberTriangle', () => {
  it('should print the number triangle for n=3', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    numberTriangle(3);
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy.mock.calls).toEqual([['1 '], ['2 3 '], ['4 5 6 ']]);
    consoleSpy.mockRestore();
  });

  it('should print the number triangle for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    numberTriangle(5);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['1 '],
      ['2 3 '],
      ['4 5 6 '],
      ['7 8 9 10 '],
      ['11 12 13 14 15 '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the number triangle for n=7', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    numberTriangle(7);
    expect(consoleSpy).toHaveBeenCalledTimes(7);
    expect(consoleSpy.mock.calls).toEqual([
      ['1 '],
      ['2 3 '],
      ['4 5 6 '],
      ['7 8 9 10 '],
      ['11 12 13 14 15 '],
      ['16 17 18 19 20 21 '],
      ['22 23 24 25 26 27 28 '],
    ]);
    consoleSpy.mockRestore();
  });
});
