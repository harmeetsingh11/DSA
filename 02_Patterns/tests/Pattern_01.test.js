const fullSquareStarPattern = require('../Pattern_01/Pattern_01');

describe('fullSquareStarPattern', () => {
  it('should print the full square star pattern for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    fullSquareStarPattern(5);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['* * * * * '],
      ['* * * * * '],
      ['* * * * * '],
      ['* * * * * '],
      ['* * * * * '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the full square star pattern for n=10', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    fullSquareStarPattern(10);
    expect(consoleSpy).toHaveBeenCalledTimes(10);
    expect(consoleSpy.mock.calls).toEqual([
      ['* * * * * * * * * * '],
      ['* * * * * * * * * * '],
      ['* * * * * * * * * * '],
      ['* * * * * * * * * * '],
      ['* * * * * * * * * * '],
      ['* * * * * * * * * * '],
      ['* * * * * * * * * * '],
      ['* * * * * * * * * * '],
      ['* * * * * * * * * * '],
      ['* * * * * * * * * * '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the full square star pattern for n=15', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    fullSquareStarPattern(15);
    expect(consoleSpy).toHaveBeenCalledTimes(15);
    expect(consoleSpy.mock.calls).toEqual([
      ['* * * * * * * * * * * * * * * '],
      ['* * * * * * * * * * * * * * * '],
      ['* * * * * * * * * * * * * * * '],
      ['* * * * * * * * * * * * * * * '],
      ['* * * * * * * * * * * * * * * '],
      ['* * * * * * * * * * * * * * * '],
      ['* * * * * * * * * * * * * * * '],
      ['* * * * * * * * * * * * * * * '],
      ['* * * * * * * * * * * * * * * '],
      ['* * * * * * * * * * * * * * * '],
      ['* * * * * * * * * * * * * * * '],
      ['* * * * * * * * * * * * * * * '],
      ['* * * * * * * * * * * * * * * '],
      ['* * * * * * * * * * * * * * * '],
      ['* * * * * * * * * * * * * * * '],
    ]);
    consoleSpy.mockRestore();
  });
});
