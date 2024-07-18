const bubbleSortIterative = require('../02_Bubble_Sort/02_iterativeBubbleSort');
const bubbleSortOptimized = require('../02_Bubble_Sort/02_optimalBubbleSort'); // Update the path accordingly

const testCases = [
  { input: [5, 3, 8, 4, 2], expected: [2, 3, 4, 5, 8] },
  { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
  { input: [5, -3, 8, 4, -2], expected: [-3, -2, 4, 5, 8] },
  { input: [5, 3, 8, 3, 2], expected: [2, 3, 3, 5, 8] },
  { input: [5], expected: [5] },
];

describe.each([
  ['iterative bubble sort', bubbleSortIterative],
  ['optimized bubble sort', bubbleSortOptimized],
])('Testing %s', (name, bubbleSortFunction) => {
  test.each(testCases)('sorts array %j correctly', ({ input, expected }) => {
    expect(bubbleSortFunction([...input])).toEqual(expected);
  });
});
