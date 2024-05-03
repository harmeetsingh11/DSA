const concentricSquarePattern = require('../Pattern_22/Pattern_22');
describe('concentricSquarePattern', () => {
  it('should print the concentric square pattern for n=4', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    concentricSquarePattern(4);
    expect(consoleSpy).toHaveBeenCalledTimes(7);
    expect(consoleSpy.mock.calls).toEqual([
      ['4 4 4 4 4 4 4 '],
      ['4 3 3 3 3 3 4 '],
      ['4 3 2 2 2 3 4 '],
      ['4 3 2 1 2 3 4 '],
      ['4 3 2 2 2 3 4 '],
      ['4 3 3 3 3 3 4 '],
      ['4 4 4 4 4 4 4 '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the concentric square pattern for n=6', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    concentricSquarePattern(6);
    expect(consoleSpy).toHaveBeenCalledTimes(11);
    expect(consoleSpy.mock.calls).toEqual([
      ['6 6 6 6 6 6 6 6 6 6 6 '],
      ['6 5 5 5 5 5 5 5 5 5 6 '],
      ['6 5 4 4 4 4 4 4 4 5 6 '],
      ['6 5 4 3 3 3 3 3 4 5 6 '],
      ['6 5 4 3 2 2 2 3 4 5 6 '],
      ['6 5 4 3 2 1 2 3 4 5 6 '],
      ['6 5 4 3 2 2 2 3 4 5 6 '],
      ['6 5 4 3 3 3 3 3 4 5 6 '],
      ['6 5 4 4 4 4 4 4 4 5 6 '],
      ['6 5 5 5 5 5 5 5 5 5 6 '],
      ['6 6 6 6 6 6 6 6 6 6 6 '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the concentric square pattern for n=9', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    concentricSquarePattern(9);
    expect(consoleSpy).toHaveBeenCalledTimes(17);
    expect(consoleSpy.mock.calls).toEqual([
      ['9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 '],
      ['9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 '],
      ['9 8 7 7 7 7 7 7 7 7 7 7 7 7 7 8 9 '],
      ['9 8 7 6 6 6 6 6 6 6 6 6 6 6 7 8 9 '],
      ['9 8 7 6 5 5 5 5 5 5 5 5 5 6 7 8 9 '],
      ['9 8 7 6 5 4 4 4 4 4 4 4 5 6 7 8 9 '],
      ['9 8 7 6 5 4 3 3 3 3 3 4 5 6 7 8 9 '],
      ['9 8 7 6 5 4 3 2 2 2 3 4 5 6 7 8 9 '],
      ['9 8 7 6 5 4 3 2 1 2 3 4 5 6 7 8 9 '],
      ['9 8 7 6 5 4 3 2 2 2 3 4 5 6 7 8 9 '],
      ['9 8 7 6 5 4 3 3 3 3 3 4 5 6 7 8 9 '],
      ['9 8 7 6 5 4 4 4 4 4 4 4 5 6 7 8 9 '],
      ['9 8 7 6 5 5 5 5 5 5 5 5 5 6 7 8 9 '],
      ['9 8 7 6 6 6 6 6 6 6 6 6 6 6 7 8 9 '],
      ['9 8 7 7 7 7 7 7 7 7 7 7 7 7 7 8 9 '],
      ['9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 '],
      ['9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 '],
    ]);
    consoleSpy.mockRestore();
  });
});
