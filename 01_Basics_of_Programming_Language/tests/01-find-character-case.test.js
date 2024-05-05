const checkCharacterType = require('../01-find-character-case/01-find-character-case');

describe('checkCharacterType', () => {
  let mockLog;

  beforeEach(() => {
    mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should log 1 when character is uppercase', () => {
    checkCharacterType('A');
    expect(mockLog).toHaveBeenCalledWith(1);
  });

  test('should log 0 when character is lowercase', () => {
    checkCharacterType('a');
    expect(mockLog).toHaveBeenCalledWith(0);
  });

  test('should log -1 when character is not an alphabet', () => {
    checkCharacterType('5');
    expect(mockLog).toHaveBeenCalledWith(-1);
  });
});
