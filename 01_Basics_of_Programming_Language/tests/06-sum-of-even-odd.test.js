const sumOfEvenAndOddDigits = require('../06-sum-of-even-odd/06-sum-of-even-odd');

describe('sumOfEvenAndOddDigits', () => {
  it('should return the sum of even and odd digits for a given number', () => {
    expect(sumOfEvenAndOddDigits(132456)).toEqual('12 9');
  });

  it('should handle a number with only even digits', () => {
    expect(sumOfEvenAndOddDigits(2468)).toEqual('20 0');
  });

  it('should handle a number with only odd digits', () => {
    expect(sumOfEvenAndOddDigits(13579)).toEqual('0 25');
  });

  it('should handle a single-digit number', () => {
    expect(sumOfEvenAndOddDigits(7)).toEqual('0 7');
  });

  it('should handle a zero input', () => {
    expect(sumOfEvenAndOddDigits(0)).toEqual('0 0');
  });
});
