const invertedAlphabeticalPattern = require('../Pattern_15/Pattern_15');

describe('invertedAlphabeticalPattern', () => {
  it('should print the inverted alphabetical pattern for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    invertedAlphabeticalPattern(5);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['A B C D E '],
      ['A B C D '],
      ['A B C '],
      ['A B '],
      ['A '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the inverted alphabetical pattern for n=10', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    invertedAlphabeticalPattern(10);
    expect(consoleSpy).toHaveBeenCalledTimes(10);
    expect(consoleSpy.mock.calls).toEqual([
      ['A B C D E F G H I J '],
      ['A B C D E F G H I '],
      ['A B C D E F G H '],
      ['A B C D E F G '],
      ['A B C D E F '],
      ['A B C D E '],
      ['A B C D '],
      ['A B C '],
      ['A B '],
      ['A '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the inverted alphabetical pattern for n=15', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    invertedAlphabeticalPattern(15);
    expect(consoleSpy).toHaveBeenCalledTimes(15);
    expect(consoleSpy.mock.calls).toEqual([
      ['A B C D E F G H I J K L M N O '],
      ['A B C D E F G H I J K L M N '],
      ['A B C D E F G H I J K L M '],
      ['A B C D E F G H I J K L '],
      ['A B C D E F G H I J K '],
      ['A B C D E F G H I J '],
      ['A B C D E F G H I '],
      ['A B C D E F G H '],
      ['A B C D E F G '],
      ['A B C D E F '],
      ['A B C D E '],
      ['A B C D '],
      ['A B C '],
      ['A B '],
      ['A '],
    ]);
    consoleSpy.mockRestore();
  });
});
