const reverseAlphabticalTriangle = require('../Pattern_18/Pattern_18');

describe('Reverse Alphabetical Triangle Pattern', () => {
  it('should print the reverse alphabetical pattern for n = 5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    reverseAlphabticalTriangle(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['E '],
      ['D E '],
      ['C D E '],
      ['B C D E '],
      ['A B C D E '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the reverse alphabetical pattern for n = 10', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    reverseAlphabticalTriangle(10);
    expect(consoleSpy.mock.calls).toEqual([
      ['J '],
      ['I J '],
      ['H I J '],
      ['G H I J '],
      ['F G H I J '],
      ['E F G H I J '],
      ['D E F G H I J '],
      ['C D E F G H I J '],
      ['B C D E F G H I J '],
      ['A B C D E F G H I J '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the reverse alphabetical pattern for n = 15', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    reverseAlphabticalTriangle(15);
    expect(consoleSpy.mock.calls).toEqual([
      ['O '],
      ['N O '],
      ['M N O '],
      ['L M N O '],
      ['K L M N O '],
      ['J K L M N O '],
      ['I J K L M N O '],
      ['H I J K L M N O '],
      ['G H I J K L M N O '],
      ['F G H I J K L M N O '],
      ['E F G H I J K L M N O '],
      ['D E F G H I J K L M N O '],
      ['C D E F G H I J K L M N O '],
      ['B C D E F G H I J K L M N O '],
      ['A B C D E F G H I J K L M N O '],
    ]);
    consoleSpy.mockRestore();
  });
});
