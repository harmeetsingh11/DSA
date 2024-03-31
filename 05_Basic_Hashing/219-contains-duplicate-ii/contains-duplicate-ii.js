var containsNearbyDuplicate = function(nums, k) {
    let left = 0;
    const numSet = new Set();

    for (let right = 0; right < nums.length; right++) {
        // If the difference between left and right pointers exceeds k, remove the element at left pointer from the set
        if (right - left > k) {
            numSet.delete(nums[left]);
            left++;
        }

        // If the current element already exists in the set, return true
        if (numSet.has(nums[right])) {
            return true;
        }

        // Otherwise, add the current element to the set
        numSet.add(nums[right]);
    }

    // If no such pair is found, return false
    return false;
};