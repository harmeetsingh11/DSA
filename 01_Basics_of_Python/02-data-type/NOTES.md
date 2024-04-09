## Approach

Each data type has a fixed size. So we can check ‘type’ for each data type and return its corresponding size.

**The steps are as follows:**

1. If ‘type’ is equal to “Integer”, then return 4.
2. If ‘type’ is equal to “Long”, then return 8.
3. If ‘type’ is equal to “Float”, then return 4.
4. If ‘type’ is equal to “Double”, then return 8.
5. If ‘type’ is equal to “Character”, then return 1.
6. In case non of the data types matches with ‘type’, there is an error. So return -1.

### Time Complexity
O(1), that is constant time.

The time is proportional to the number of data types and the length of their names(for string comparison).

Since the data types are fixed, we can consider it as constant time.

Hence the time complexity is O(1).

### Space Complexity
O(1), that is constant space.

We are not creating any variable thus not using any auxiliary space.

Hence the space complexity is O(1).
