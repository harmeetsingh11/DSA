import printDiamond from './Pattern_09';

describe('printDiamond', () => {
  it('should print the diamond pattern for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    printDiamond(5);
    expect(consoleSpy).toHaveBeenCalledTimes(9);
    expect(consoleSpy.mock.calls).toEqual([
      ['    *    '],
      ['   ***   '],
      ['  *****  '],
      [' ******* '],
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
    expect(consoleSpy).toHaveBeenCalledTimes(19);
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
    expect(consoleSpy).toHaveBeenCalledTimes(29);
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
