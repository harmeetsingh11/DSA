import rightTriangleStarPattern from './Pattern_02';

describe('rightTriangleStarPattern', () => {
  it('should print the right triangle star pattern for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    rightTriangleStarPattern(5);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['* '],
      ['* * '],
      ['* * * '],
      ['* * * * '],
      ['* * * * * '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the right triangle star pattern for n=7', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    rightTriangleStarPattern(7);
    expect(consoleSpy).toHaveBeenCalledTimes(7);
    expect(consoleSpy.mock.calls).toEqual([
      ['* '],
      ['* * '],
      ['* * * '],
      ['* * * * '],
      ['* * * * * '],
      ['* * * * * * '],
      ['* * * * * * * '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the right triangle star pattern for n=9', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    rightTriangleStarPattern(9);
    expect(consoleSpy).toHaveBeenCalledTimes(9);
    expect(consoleSpy.mock.calls).toEqual([
      ['* '],
      ['* * '],
      ['* * * '],
      ['* * * * '],
      ['* * * * * '],
      ['* * * * * * '],
      ['* * * * * * * '],
      ['* * * * * * * * '],
      ['* * * * * * * * * '],
    ]);
    consoleSpy.mockRestore();
  });
});
