import invertedRightAngleTrianglePattern from './Pattern_06';

describe('invertedRightAngleTrianglePattern', () => {
  it('prints the inverted right-angle triangle pattern for n=3', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    invertedRightAngleTrianglePattern(3);
    expect(consoleSpy.mock.calls).toEqual([['1 2 3 '], ['1 2 '], ['1 ']]);
    consoleSpy.mockRestore();
  });

  it('prints the inverted right-angle triangle pattern for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    invertedRightAngleTrianglePattern(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['1 2 3 4 5 '],
      ['1 2 3 4 '],
      ['1 2 3 '],
      ['1 2 '],
      ['1 '],
    ]);
    consoleSpy.mockRestore();
  });

  it('prints the inverted right-angle triangle pattern for n=7', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    invertedRightAngleTrianglePattern(7);
    expect(consoleSpy.mock.calls).toEqual([
      ['1 2 3 4 5 6 7 '],
      ['1 2 3 4 5 6 '],
      ['1 2 3 4 5 '],
      ['1 2 3 4 '],
      ['1 2 3 '],
      ['1 2 '],
      ['1 '],
    ]);
    consoleSpy.mockRestore();
  });

  it('prints the inverted right-angle triangle pattern for n=9', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    invertedRightAngleTrianglePattern(9);
    expect(consoleSpy.mock.calls).toEqual([
      ['1 2 3 4 5 6 7 8 9 '],
      ['1 2 3 4 5 6 7 8 '],
      ['1 2 3 4 5 6 7 '],
      ['1 2 3 4 5 6 '],
      ['1 2 3 4 5 '],
      ['1 2 3 4 '],
      ['1 2 3 '],
      ['1 2 '],
      ['1 '],
    ]);
    consoleSpy.mockRestore();
  });
});
