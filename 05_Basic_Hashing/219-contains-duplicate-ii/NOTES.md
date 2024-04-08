## Approach: Sliding Window

### Intuition:
- By maintaining a set of elements within a sliding window of size `k`, we ensure that we only consider elements that fall within the specified range.
- As we iterate through the array, we continuously update the sliding window by adding new elements and removing old ones.
- If we encounter a duplicate element within the sliding window, we return `true`.
- This approach optimizes the time complexity by avoiding unnecessary comparisons, as we only consider elements within the sliding window.

### Code Explanation:
1. Initialize a set (`numSet`) to keep track of the unique elements encountered within the sliding window.
2. Initialize two pointers, `left` and `right`, pointing to the start and end of the sliding window, respectively.
3. Iterate through the array using the `right` pointer.
4. At each step, check if the absolute difference between `right` and `left` exceeds `k`. If it does, remove the element at the `left` pointer from the set and increment `left`.
5. Check if the current element (`nums[right]`) already exists in the set. If it does, return `true` as we have found a duplicate within the specified distance `k`.
6. If the current element is not found in the set, add it to the set.
7. If the loop completes without finding any duplicates, return `false`.

In summary, the sliding window approach efficiently handles the problem by maintaining a set of unique elements within a specified distance `k`, allowing for efficient detection of duplicates.

### Time Complexity:

  - The function iterates through the `nums` array once with a single loop, which has a time complexity of $O(n)$, where n is the length of the `nums` array.
  - Inside the loop, the operations performed are constant-time operations (addition, deletion, and checking membership in a Set), which do not depend on the size of the input array.
  - Thus, the overall time complexity of the function is **$O(n)$**.

### Space Complexity:
  - The function uses a Set (`numSet`) to store unique elements within the sliding window. The size of this set is bounded by the value of `k`.
  - In the worst-case scenario, when there are no duplicates within the sliding window of size `k`, the Set will contain at most `k` elements.
  - Therefore, the space complexity of the function is **$O(k)$**.

> [!NOTE]
> In summary:
> - Time Complexity: **$O(n)$**
> - Space Complexity: **$O(k)$**
> 
> Where:
> - n is the length of the `nums` array.
> - k is the value of the parameter `k`.