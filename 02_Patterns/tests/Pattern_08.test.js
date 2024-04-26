const invertedPyramid = require('../Pattern_08/Pattern_08');
describe('invertedPyramid', () => {
  it('should print the inverted pyramid for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    invertedPyramid(5);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy.mock.calls).toEqual([
      ['*********'],
      [' ******* '],
      ['  *****  '],
      ['   ***   '],
      ['    *    '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the inverted pyramid for n=10', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    invertedPyramid(10);
    expect(consoleSpy).toHaveBeenCalledTimes(10);
    expect(consoleSpy.mock.calls).toEqual([
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

  it('should print the inverted pyramid for n=15', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    invertedPyramid(15);
    expect(consoleSpy).toHaveBeenCalledTimes(15);
    expect(consoleSpy.mock.calls).toEqual([
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
