// printTriangle.test.js
import printTriangle from './Pattern_10';

describe('printTriangle', () => {
  it('should print the triangle for n=5', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    printTriangle(5);
    expect(consoleSpy).toHaveBeenCalledTimes(9);
    expect(consoleSpy.mock.calls).toEqual([
      ['* '],
      ['* * '],
      ['* * * '],
      ['* * * * '],
      ['* * * * * '],
      ['* * * * '],
      ['* * * '],
      ['* * '],
      ['* '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the triangle for n=10', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    printTriangle(10);
    expect(consoleSpy).toHaveBeenCalledTimes(19);
    expect(consoleSpy.mock.calls).toEqual([
      ['* '],
      ['* * '],
      ['* * * '],
      ['* * * * '],
      ['* * * * * '],
      ['* * * * * * '],
      ['* * * * * * * '],
      ['* * * * * * * * '],
      ['* * * * * * * * * '],
      ['* * * * * * * * * * '],
      ['* * * * * * * * * '],
      ['* * * * * * * * '],
      ['* * * * * * * '],
      ['* * * * * * '],
      ['* * * * * '],
      ['* * * * '],
      ['* * * '],
      ['* * '],
      ['* '],
    ]);
    consoleSpy.mockRestore();
  });

  it('should print the triangle for n=15', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    printTriangle(15);
    expect(consoleSpy).toHaveBeenCalledTimes(29);
    expect(consoleSpy.mock.calls).toEqual([
      [`* `],
      [`* * `],
      [`* * * `],
      [`* * * * `],
      [`* * * * * `],
      [`* * * * * * `],
      [`* * * * * * * `],
      [`* * * * * * * * `],
      [`* * * * * * * * * `],
      [`* * * * * * * * * * `],
      [`* * * * * * * * * * * `],
      [`* * * * * * * * * * * * `],
      [`* * * * * * * * * * * * * `],
      [`* * * * * * * * * * * * * * `],
      [`* * * * * * * * * * * * * * * `],
      [`* * * * * * * * * * * * * * `],
      [`* * * * * * * * * * * * * `],
      [`* * * * * * * * * * * * `],
      [`* * * * * * * * * * * `],
      [`* * * * * * * * * * `],
      [`* * * * * * * * * `],
      [`* * * * * * * * `],
      [`* * * * * * * `],
      [`* * * * * * `],
      [`* * * * * `],
      [`* * * * `],
      [`* * * `],
      [`* * `],
      [`* `],
    ]);
    consoleSpy.mockRestore();
  });
});
