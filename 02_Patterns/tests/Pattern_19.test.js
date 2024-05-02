const hollowDiamondStarPattern = require('../Pattern_19/Pattern_19');
test('hollowDiamondStarPattern for n=5', () => {
  const expectedOutput = [
    '**********',
    '****  ****',
    '***    ***',
    '**      **',
    '*        *',
    '*        *',
    '**      **',
    '***    ***',
    '****  ****',
    '**********',
  ];
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  hollowDiamondStarPattern(5);
  expect(consoleSpy.mock.calls.map((args) => args[0])).toEqual(expectedOutput);
  consoleSpy.mockRestore();
});

test('hollowDiamondStarPattern for n=10', () => {
  const expectedOutput = [
    '********************',
    '*********  *********',
    '********    ********',
    '*******      *******',
    '******        ******',
    '*****          *****',
    '****            ****',
    '***              ***',
    '**                **',
    '*                  *',
    '*                  *',
    '**                **',
    '***              ***',
    '****            ****',
    '*****          *****',
    '******        ******',
    '*******      *******',
    '********    ********',
    '*********  *********',
    '********************',
  ];
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  hollowDiamondStarPattern(10);
  expect(consoleSpy.mock.calls.map((args) => args[0])).toEqual(expectedOutput);
  consoleSpy.mockRestore();
});

test('hollowDiamondStarPattern for n=15', () => {
  const expectedOutput = [
    '******************************',
    '**************  **************',
    '*************    *************',
    '************      ************',
    '***********        ***********',
    '**********          **********',
    '*********            *********',
    '********              ********',
    '*******                *******',
    '******                  ******',
    '*****                    *****',
    '****                      ****',
    '***                        ***',
    '**                          **',
    '*                            *',
    '*                            *',
    '**                          **',
    '***                        ***',
    '****                      ****',
    '*****                    *****',
    '******                  ******',
    '*******                *******',
    '********              ********',
    '*********            *********',
    '**********          **********',
    '***********        ***********',
    '************      ************',
    '*************    *************',
    '**************  **************',
    '******************************',
  ];
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  hollowDiamondStarPattern(15);
  expect(consoleSpy.mock.calls.map((args) => args[0])).toEqual(expectedOutput);
  consoleSpy.mockRestore();
});
