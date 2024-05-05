const dataTypes = require('../02-data-type/02-data-types');

describe('dataTypes function', () => {
  it('should return 4 for type Integer', () => {
    expect(dataTypes('Integer')).toBe(4);
  });

  it('should return 8 for type Long', () => {
    expect(dataTypes('Long')).toBe(8);
  });

  it('should return 4 for type Float', () => {
    expect(dataTypes('Float')).toBe(4);
  });

  it('should return 8 for type Double', () => {
    expect(dataTypes('Double')).toBe(8);
  });

  it('should return 1 for type Character', () => {
    expect(dataTypes('Character')).toBe(1);
  });

  it('should return -1 for unknown type', () => {
    expect(dataTypes('Unknown')).toBe(-1);
  });
});
