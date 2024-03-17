## Method 1 (using Objects)

### Code Explanation:

- The function `countFrequency` takes an array `arr` as input and returns an object containing the frequency of each element in the array.
- Inside the function, we initialize an empty object `frequency` to store the frequency of each element.
- We then iterate over each element `num` of the input array `arr` using a `for...of` loop.
- For each element `num`, we check if it exists as a key in the `frequency` object. If it does not exist (`frequency[num]` evaluates to `undefined`), we use the logical OR (`||`) operator to set its value to 0 before incrementing it by 1. This ensures that we start with a value of 0 if the element is encountered for the first time. If it already exists, we simply increment its value by 1.
- Finally, we return the `frequency` object containing the frequency of each element.

### Time Complexity

To analyze the time complexity of the `countFrequency` function:

1. **Iteration over the Array**: The `for...of` loop iterates over each element of the input array `arr`. The time complexity of this operation is O(n), where n is the number of elements in the array.

2. **Accessing and Updating the Object**: Inside the loop, we perform operations on the `frequency` object:
   - Accessing or updating a property in an object has an average time complexity of O(1).

Since both accessing and updating the object are constant time operations and they are performed once for each element in the array, the total time complexity of these operations inside the loop is O(n).

Therefore, the overall time complexity of the `countFrequency` function is dominated by the iteration over the array, which is O(n). 

In summary, the time complexity of the `countFrequency` function is **O(n)**, where n is the number of elements in the input array. This means that the time taken by the function to count the frequency of each element grows linearly with the size of the input array.


## Method 2 (using Map)

### Code Explanation:


- The function `countFrequency` takes an array `arr` as input and returns a `Map` object containing the frequency of each element in the array.
- Inside the function, we initialize a new `Map` object `frequency` to store the frequency of each element.
- We then iterate over each element `num` of the input array `arr` using a `for...of` loop.
- For each element `num`, we check if it exists as a key in the `frequency` map using the `get` method. If it does not exist (the returned value is `undefined`), we use the logical OR (`||`) operator to set its frequency to 0 before incrementing it by 1. This ensures that we start with a value of 0 if the element is encountered for the first time. If it already exists, we simply retrieve its current frequency using the `get` method and increment it by 1.
- Finally, we return the `frequency` map containing the frequency of each element.

### Time Complexity

To analyze the time complexity of the `countFrequency` function, let's break down the main operations:

1. **Iteration over the Array**: The `for...of` loop iterates over each element of the input array `arr`. The time complexity of this operation is O(n), where n is the number of elements in the array.

2. **Accessing and Updating the Map**: Inside the loop, we perform operations on the `frequency` map:
   - `frequency.get(num)`: Accessing the value associated with a key in a `Map` has an average time complexity of O(1).
   - `frequency.set(num, (frequency.get(num) || 0) + 1)`: Setting a value associated with a key in a `Map` also has an average time complexity of O(1).

Since both accessing and updating the map are constant time operations on average, and they are performed once for each element in the array, the total time complexity of these operations inside the loop is O(n).

Therefore, the overall time complexity of the `countFrequency` function is dominated by the iteration over the array, which is O(n). 

In summary, the time complexity of the `countFrequency` function is **O(n)**, where n is the number of elements in the input array. This means that the time taken by the function to count the frequency of each element grows linearly with the size of the input array.