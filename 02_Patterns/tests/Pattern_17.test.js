// Import the characterPyramid function
const characterPyramid = require('../Pattern_17/Pattern_17');
describe('characterPyramid', () => {
  it('should print the pyramid pattern for n=5', () => {
    // Spy on console.log to capture the output
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    // Call the function with n=5
    characterPyramid(5);

    // Assert the output
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['    A    '],
      ['   ABA   '],
      ['  ABCBA  '],
      [' ABCDCBA '],
      ['ABCDEDCBA'],
    ]);

    // Restore the original console.log
    consoleSpy.mockRestore();
  });

  it('should print the pyramid pattern for n=10', () => {
    // Spy on console.log to capture the output
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    // Call the function with n=10
    characterPyramid(10);

    // Assert the output
    expect(consoleSpy).toHaveBeenCalledTimes(10);
    expect(consoleSpy.mock.calls).toEqual([
      ['         A         '],
      ['        ABA        '],
      ['       ABCBA       '],
      ['      ABCDCBA      '],
      ['     ABCDEDCBA     '],
      ['    ABCDEFEDCBA    '],
      ['   ABCDEFGFEDCBA   '],
      ['  ABCDEFGHGFEDCBA  '],
      [' ABCDEFGHIHGFEDCBA '],
      ['ABCDEFGHIJIHGFEDCBA'],
    ]);

    // Restore the original console.log
    consoleSpy.mockRestore();
  });

  it('should print the pyramid pattern for n=15', () => {
    // Spy on console.log to capture the output
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    // Call the function with n=15
    characterPyramid(15);

    // Assert the output
    expect(consoleSpy).toHaveBeenCalledTimes(15);
    expect(consoleSpy.mock.calls).toEqual([
      ['              A              '],
      ['             ABA             '],
      ['            ABCBA            '],
      ['           ABCDCBA           '],
      ['          ABCDEDCBA          '],
      ['         ABCDEFEDCBA         '],
      ['        ABCDEFGFEDCBA        '],
      ['       ABCDEFGHGFEDCBA       '],
      ['      ABCDEFGHIHGFEDCBA      '],
      ['     ABCDEFGHIJIHGFEDCBA     '],
      ['    ABCDEFGHIJKJIHGFEDCBA    '],
      ['   ABCDEFGHIJKLKJIHGFEDCBA   '],
      ['  ABCDEFGHIJKLMLKJIHGFEDCBA  '],
      [' ABCDEFGHIJKLMNMLKJIHGFEDCBA '],
      ['ABCDEFGHIJKLMNONMLKJIHGFEDCBA'],
    ]);

    // Restore the original console.log
    consoleSpy.mockRestore();
  });
});
/* 
[
      '    A    ',
      '   ABA   ',
      '  ABCBA  ',
      ' ABCDCBA ',
      'ABCDEDCBA',
    ];
[
      '         A         ',
      '        ABA        ',
      '       ABCBA       ',
      '      ABCDCBA      ',
      '     ABCDEDCBA     ',
      '    ABCDEFEDCBA    ',
      '   ABCDEFGFEDCBA   ',
      '  ABCDEFGHGFEDCBA  ',
      ' ABCDEFGHIHGFEDCBA ',
      'ABCDEFGHIJIHGFEDCBA',
    ];

[
      '              A              ',
      '             ABA             ',
      '            ABCBA            ',
      '           ABCDCBA           ',
      '          ABCDEDCBA          ',
      '         ABCDEFEDCBA         ',
      '        ABCDEFGFEDCBA        ',
      '       ABCDEFGHGFEDCBA       ',
      '      ABCDEFGHIHGFEDCBA      ',
      '     ABCDEFGJIJIHGFEDCBA     ',
      '    ABCDEFGHIJKJIHGFEDCBA    ',
      '   ABCDEFGHIJKLKJIHGFEDCBA   ',
      '  ABCDEFGHIJKLMLKJIHGFEDCBA  ',
      ' ABCDEFGHIJKLMNMLKJIHGFEDCBA ',
      'ABCDEFGHIJKLMNOPNMLKJIHGFEDCBA',
    ];
*/
