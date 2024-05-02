// Import the function to be tested
const butterflyPattern = require('../Pattern_20/Pattern_20');

// Test cases for n=5
test('Butterfly Pattern for n=5', () => {
  // Define the expected pattern for n=5
  const expectedPattern = [
    '*        *',
    '**      **',
    '***    ***',
    '****  ****',
    '**********',
    '****  ****',
    '***    ***',
    '**      **',
    '*        *',
  ];

  // Mock console.log to capture the output
  const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

  // Call the function with n=5
  butterflyPattern(5);

  // Check if console.log was called with the expected output
  expect(consoleLogSpy.mock.calls.map((args) => args[0])).toEqual(
    expectedPattern
  );

  // Restore console.log
  consoleLogSpy.mockRestore();
});

// Test cases for n=10
test('Butterfly Pattern for n=10', () => {
  // Define the expected pattern for n=10
  const expectedPattern = [
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
    '*********  *********',
    '********    ********',
    '*******      *******',
    '******        ******',
    '*****          *****',
    '****            ****',
    '***              ***',
    '**                **',
    '*                  *',
  ];

  // Mock console.log to capture the output
  const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

  // Call the function with n=10
  butterflyPattern(10);

  // Check if console.log was called with the expected output
  expect(consoleLogSpy.mock.calls.map((args) => args[0])).toEqual(
    expectedPattern
  );

  // Restore console.log
  consoleLogSpy.mockRestore();
});

// Test cases for n=15
test('Butterfly Pattern for n=15', () => {
  // Define the expected pattern for n=15
  const expectedPattern = [
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
  ];

  // Mock console.log to capture the output
  const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

  // Call the function with n=15
  butterflyPattern(15);

  // Check if console.log was called with the expected output
  expect(consoleLogSpy.mock.calls.map((args) => args[0])).toEqual(
    expectedPattern
  );

  // Restore console.log
  consoleLogSpy.mockRestore();
});
