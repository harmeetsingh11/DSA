const reverseArrayIterative = require('../06_Reverse an Array/06_iterativeReverseArray');
const reverseArrayRecursive = require('../06_Reverse an Array/06_recursiveReverseArray');

describe('Iterative Reverse Array', () => {
  test('Reverse [1, 2, 3, 4, 5]', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = '5 4 3 2 1';
    const result = reverseArrayIterative([...arr]);
    expect(result).toBe(expected);
  });

  test('Reverse [9, 8, 7, 6, 5]', () => {
    const arr = [9, 8, 7, 6, 5];
    const expected = '5 6 7 8 9';
    const result = reverseArrayIterative([...arr]);
    expect(result).toBe(expected);
  });

  test('Reverse [100, 200, 300, 400, 500]', () => {
    const arr = [100, 200, 300, 400, 500];
    const expected = '500 400 300 200 100';
    const result = reverseArrayIterative([...arr]);
    expect(result).toBe(expected);
  });

  test('Reverse [0]', () => {
    const arr = [0];
    const expected = '0';
    const result = reverseArrayIterative([...arr]);
    expect(result).toBe(expected);
  });

  test('Reverse [5, 4, 3, 2, 1]', () => {
    const arr = [5, 4, 3, 2, 1];
    const expected = '1 2 3 4 5';
    const result = reverseArrayIterative([...arr]);
    expect(result).toBe(expected);
  });
});

describe('Recursive Reverse Array', () => {
  test('Reverse [1, 2, 3, 4, 5]', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = '5 4 3 2 1';
    const result = reverseArrayRecursive([...arr]);
    expect(result).toBe(expected);
  });

  test('Reverse [9, 8, 7, 6, 5]', () => {
    const arr = [9, 8, 7, 6, 5];
    const expected = '5 6 7 8 9';
    const result = reverseArrayRecursive([...arr]);
    expect(result).toBe(expected);
  });

  test('Reverse [100, 200, 300, 400, 500]', () => {
    const arr = [100, 200, 300, 400, 500];
    const expected = '500 400 300 200 100';
    const result = reverseArrayRecursive([...arr]);
    expect(result).toBe(expected);
  });

  test('Reverse [0]', () => {
    const arr = [0];
    const expected = '0';
    const result = reverseArrayRecursive([...arr]);
    expect(result).toBe(expected);
  });

  test('Reverse [5, 4, 3, 2, 1]', () => {
    const arr = [5, 4, 3, 2, 1];
    const expected = '1 2 3 4 5';
    const result = reverseArrayRecursive([...arr]);
    expect(result).toBe(expected);
  });
});
