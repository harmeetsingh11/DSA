const printDiamond = require('../Pattern_09/Pattern_09');

describe('printDiamond', () => {
  it('should print the diamond pattern for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    printDiamond(5);
    expect(consoleSpy).toHaveBeenCalledTimes(10);
    expect(consoleSpy.mock.calls).toEqual([
      ['    *    '],
      ['   ***   '],
      ['  *****  '],
      [' ******* '],
      ['*********'],
      ['*********'],
      [' ******* '],
      ['  *****  '],
      ['   ***   '],
      ['    *    '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the diamond pattern for n=10', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    printDiamond(10);
    expect(consoleSpy).toHaveBeenCalledTimes(20);
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
      ['*******************'],
      [' ***************** '],
      ['  ***************  '],
      ['   *************   '],
      ['    ***********    '],
      ['     *********     '],
      ['      *******      '],
      ['       *****       '],
      ['        ***        '],
      ['         *         '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the diamond pattern for n=15', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    printDiamond(15);
    expect(consoleSpy).toHaveBeenCalledTimes(30);
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
      ['*****************************'],
      [' *************************** '],
      ['  *************************  '],
      ['   ***********************   '],
      ['    *********************    '],
      ['     *******************     '],
      ['      *****************      '],
      ['       ***************       '],
      ['        *************        '],
      ['         ***********         '],
      ['          *********          '],
      ['           *******           '],
      ['            *****            '],
      ['             ***             '],
      ['              *              '],
    ]);
    consoleSpy.mockRestore();
  });
});
