const printNtimes = require('../02_Print name N times/02_printNamesNtimes');

// Mock process.stdout.write
const originalWrite = process.stdout.write;
beforeEach(() => {
  process.stdout.write = jest.fn();
});
afterEach(() => {
  process.stdout.write = originalWrite;
});

test('Print "Coding Ninjas" 0 times', () => {
  printNtimes(0);
  expect(process.stdout.write).not.toHaveBeenCalled();
});

test('Print "Coding Ninjas" 1 time', () => {
  printNtimes(1);
  expect(process.stdout.write).toHaveBeenCalledWith('Coding Ninjas ');
});

test('Print "Coding Ninjas" 3 times', () => {
  printNtimes(3);
  expect(process.stdout.write).toHaveBeenCalledTimes(3);
  expect(process.stdout.write).toHaveBeenLastCalledWith('Coding Ninjas ');
});

test('Print "Coding Ninjas" 5 times', () => {
  printNtimes(5);
  expect(process.stdout.write).toHaveBeenCalledTimes(5);
  expect(process.stdout.write).toHaveBeenLastCalledWith('Coding Ninjas ');
});

test('Print "Coding Ninjas" 10 times', () => {
  printNtimes(10);
  expect(process.stdout.write).toHaveBeenCalledTimes(10);
  expect(process.stdout.write).toHaveBeenLastCalledWith('Coding Ninjas ');
});
