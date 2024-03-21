// Import the functions to be tested
const {
  countCharacterFrequencyObject,
  countCharacterFrequencyMap,
} = require('./count-freq-of-characters-in-string');

describe('countCharacterFrequencyObject function', () => {
  it('should return an empty object for an empty string', () => {
    expect(countCharacterFrequencyObject('')).toEqual({});
  });

  it('should return the correct character frequency object', () => {
    const inputString = 'hello world';
    const expectedObject = {
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      w: 1,
      r: 1,
      d: 1,
    };
    expect(countCharacterFrequencyObject(inputString)).toEqual(expectedObject);
  });

  it('should handle special characters properly', () => {
    const inputString = '!@#%^&*()';
    const expectedObject = {
      '!': 1,
      '@': 1,
      '#': 1,
      '%': 1,
      '^': 1,
      '&': 1,
      '*': 1,
      '(': 1,
      ')': 1,
    };
    expect(countCharacterFrequencyObject(inputString)).toEqual(expectedObject);
  });
});

describe('countCharacterFrequencyMap function', () => {
  it('should return an empty map for an empty string', () => {
    expect(countCharacterFrequencyMap('')).toEqual(new Map());
  });

  it('should return the correct character frequency map', () => {
    const inputString = 'hello world';
    const expectedMap = new Map([
      ['h', 1],
      ['e', 1],
      ['l', 3],
      ['o', 2],
      ['w', 1],
      ['r', 1],
      ['d', 1],
    ]);
    expect(countCharacterFrequencyMap(inputString)).toEqual(expectedMap);
  });

  it('should handle special characters properly', () => {
    const inputString = '!@#$%^&*()';
    const expectedMap = new Map([
      ['!', 1],
      ['@', 1],
      ['#', 1],
      ['$', 1],
      ['%', 1],
      ['^', 1],
      ['&', 1],
      ['*', 1],
      ['(', 1],
      [')', 1],
    ]);
    expect(countCharacterFrequencyMap(inputString)).toEqual(expectedMap);
  });
});
