const characterPattern = require('../Pattern_16/Pattern_16');

describe('characterPattern', () => {
  it('should print the character pattern for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    characterPattern(5);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['A '],
      ['B B '],
      ['C C C '],
      ['D D D D '],
      ['E E E E E '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the character pattern for n=10', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    characterPattern(10);
    expect(consoleSpy).toHaveBeenCalledTimes(10);
    expect(consoleSpy.mock.calls).toEqual([
      ['A '],
      ['B B '],
      ['C C C '],
      ['D D D D '],
      ['E E E E E '],
      ['F F F F F F '],
      ['G G G G G G G '],
      ['H H H H H H H H '],
      ['I I I I I I I I I '],
      ['J J J J J J J J J J '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the character pattern for n=15', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    characterPattern(15);
    expect(consoleSpy).toHaveBeenCalledTimes(15);
    expect(consoleSpy.mock.calls).toEqual([
      ['A '],
      ['B B '],
      ['C C C '],
      ['D D D D '],
      ['E E E E E '],
      ['F F F F F F '],
      ['G G G G G G G '],
      ['H H H H H H H H '],
      ['I I I I I I I I I '],
      ['J J J J J J J J J J '],
      ['K K K K K K K K K K K '],
      ['L L L L L L L L L L L L '],
      ['M M M M M M M M M M M M M '],
      ['N N N N N N N N N N N N N N '],
      ['O O O O O O O O O O O O O O O '],
    ]);
    consoleSpy.mockRestore();
  });
});
