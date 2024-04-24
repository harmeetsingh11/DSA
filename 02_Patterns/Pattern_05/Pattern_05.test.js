import invertedRightTriangleStarPattern from './Pattern_05';

describe('invertedRightTriangleStarPattern', () => {
  it('should print the inverted right triangle pattern for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    invertedRightTriangleStarPattern(5);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['* * * * * '],
      ['* * * * '],
      ['* * * '],
      ['* * '],
      ['* '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the inverted right triangle pattern for n=8', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    invertedRightTriangleStarPattern(8);
    expect(consoleSpy).toHaveBeenCalledTimes(8);
    expect(consoleSpy.mock.calls).toEqual([
      ['* * * * * * * * '],
      ['* * * * * * * '],
      ['* * * * * * '],
      ['* * * * * '],
      ['* * * * '],
      ['* * * '],
      ['* * '],
      ['* '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the inverted right triangle pattern for n=10', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    invertedRightTriangleStarPattern(10);
    expect(consoleSpy).toHaveBeenCalledTimes(10);
    expect(consoleSpy.mock.calls).toEqual([
      ['* * * * * * * * * * '],
      ['* * * * * * * * * '],
      ['* * * * * * * * '],
      ['* * * * * * * '],
      ['* * * * * * '],
      ['* * * * * '],
      ['* * * * '],
      ['* * * '],
      ['* * '],
      ['* '],
    ]);
    consoleSpy.mockRestore();
  });
});
