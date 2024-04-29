const alphabeticalTrianglePattern = require('../Pattern_14/Pattern_14');

describe('alphabeticalTrianglePattern', () => {
  it('should print the alphabetical triangle pattern for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    alphabeticalTrianglePattern(5);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['A '],
      ['A B '],
      ['A B C '],
      ['A B C D '],
      ['A B C D E '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the alphabetical triangle pattern for n=10', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    alphabeticalTrianglePattern(10);
    expect(consoleSpy).toHaveBeenCalledTimes(10);
    expect(consoleSpy.mock.calls).toEqual([
      ['A '],
      ['A B '],
      ['A B C '],
      ['A B C D '],
      ['A B C D E '],
      ['A B C D E F '],
      ['A B C D E F G '],
      ['A B C D E F G H '],
      ['A B C D E F G H I '],
      ['A B C D E F G H I J '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the alphabetical triangle pattern for n=15', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    alphabeticalTrianglePattern(15);
    expect(consoleSpy).toHaveBeenCalledTimes(15);
    expect(consoleSpy.mock.calls).toEqual([
      ['A '],
      ['A B '],
      ['A B C '],
      ['A B C D '],
      ['A B C D E '],
      ['A B C D E F '],
      ['A B C D E F G '],
      ['A B C D E F G H '],
      ['A B C D E F G H I '],
      ['A B C D E F G H I J '],
      ['A B C D E F G H I J K '],
      ['A B C D E F G H I J K L '],
      ['A B C D E F G H I J K L M '],
      ['A B C D E F G H I J K L M N '],
      ['A B C D E F G H I J K L M N O '],
    ]);
    consoleSpy.mockRestore();
  });
});
