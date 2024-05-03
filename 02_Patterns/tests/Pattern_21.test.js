const hollowSquarePattern = require('../Pattern_21/Pattern_21');
describe('Hollow Square Pattern', () => {
  it('should print hollow square pattern for n=4', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    hollowSquarePattern(4);
    expect(consoleSpy).toHaveBeenCalledTimes(4);
    expect(consoleSpy.mock.calls).toEqual([
      ['****'],
      ['*  *'],
      ['*  *'],
      ['****'],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print hollow square pattern for n=8', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    hollowSquarePattern(8);
    expect(consoleSpy).toHaveBeenCalledTimes(8);
    expect(consoleSpy.mock.calls).toEqual([
      ['********'],
      ['*      *'],
      ['*      *'],
      ['*      *'],
      ['*      *'],
      ['*      *'],
      ['*      *'],
      ['********'],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print hollow square pattern for n=12', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    hollowSquarePattern(12);
    expect(consoleSpy).toHaveBeenCalledTimes(12);
    expect(consoleSpy.mock.calls).toEqual([
      ['************'],
      ['*          *'],
      ['*          *'],
      ['*          *'],
      ['*          *'],
      ['*          *'],
      ['*          *'],
      ['*          *'],
      ['*          *'],
      ['*          *'],
      ['*          *'],
      ['************'],
    ]);
    consoleSpy.mockRestore();
  });
});
