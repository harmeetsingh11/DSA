const pyramid = require('../Pattern_07/Pattern_07');

describe('pyramid function', () => {
  test('should print the pyramid for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    pyramid(5);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['    *    '],
      ['   ***   '],
      ['  *****  '],
      [' ******* '],
      ['*********'],
    ]);
    consoleSpy.mockRestore();
  });

  test('should print the pyramid for n=10', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    pyramid(10);
    expect(consoleSpy).toHaveBeenCalledTimes(10);
    expect(consoleSpy.mock.calls).toEqual([
      ['         *         '],
      ['        ***        '],
      ['       *****       '],
      ['      *******      '],
      ['     *********     '],
      ['    ***********    '],
      ['   *************   '],
      ['  ***************  '],
      [' ***************** '],
      ['*******************'],
    ]);
    consoleSpy.mockRestore();
  });

  test('should print the pyramid for n=15', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    pyramid(15);
    expect(consoleSpy).toHaveBeenCalledTimes(15);
    expect(consoleSpy.mock.calls).toEqual([
      ['              *              '],
      ['             ***             '],
      ['            *****            '],
      ['           *******           '],
      ['          *********          '],
      ['         ***********         '],
      ['        *************        '],
      ['       ***************       '],
      ['      *****************      '],
      ['     *******************     '],
      ['    *********************    '],
      ['   ***********************   '],
      ['  *************************  '],
      [' *************************** '],
      ['*****************************'],
    ]);
    consoleSpy.mockRestore();
  });
});
