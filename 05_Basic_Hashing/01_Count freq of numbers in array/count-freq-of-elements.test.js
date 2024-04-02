import {
  countFrequencyMap,
  countFrequencyObject,
} from './count-freq-of-elements';

describe('countFrequencyObject function', () => {
  it('should return an empty object for an empty array', () => {
    expect(countFrequencyObject([])).toEqual({});
  });

  it('should return the correct frequency object', () => {
    const arr = [1, 2, 3, 4, 2, 3, 1, 3, 4, 4, 5];
    const expectedObject = {
      1: 2,
      2: 2,
      3: 3,
      4: 3,
      5: 1,
    };
    expect(countFrequencyObject(arr)).toEqual(expectedObject);
  });

  it('should handle negative numbers properly', () => {
    const arr = [-1, -2, -3, -2, -3, -1, -3, -4, -4, -5];
    const expectedObject = {
      '-1': 2,
      '-2': 2,
      '-3': 3,
      '-4': 2,
      '-5': 1,
    };
    expect(countFrequencyObject(arr)).toEqual(expectedObject);
  });
});

describe('countFrequencyMap function', () => {
  it('should return an empty map for an empty array', () => {
    expect(countFrequencyMap([])).toEqual(new Map());
  });

  it('should return the correct frequency map', () => {
    const arr = [1, 2, 3, 4, 2, 3, 1, 3, 4, 4, 5];
    const expectedMap = new Map([
      [1, 2],
      [2, 2],
      [3, 3],
      [4, 3],
      [5, 1],
    ]);
    expect(countFrequencyMap(arr)).toEqual(expectedMap);
  });

  it('should handle negative numbers properly', () => {
    const arr = [-1, -2, -3, -2, -3, -1, -3, -4, -4, -5];
    const expectedMap = new Map([
      [-1, 2],
      [-2, 2],
      [-3, 3],
      [-4, 2],
      [-5, 1],
    ]);
    expect(countFrequencyMap(arr)).toEqual(expectedMap);
  });
});
