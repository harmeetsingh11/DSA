from typing import *


# Function to count the frequency of numbers from 1 to n in the given array 'nums'.
def countFrequency(n: int, x: int, nums: List[int]) -> int:
    i = 0
    while i < n:
        # Skip the element if it is not within our range.
        if nums[i] > n or nums[i] < 1:
            i += 1
            continue

        # Calculate the index of the element.
        j = nums[i] - 1

        # Update the frequencies
        if nums[j] < 0:
            nums[i] = 0
            nums[j] -= 1
            i += 1
            continue
        else:
            # Swapping nums[j] with nums[i]
            nums[j], nums[i] = nums[i], nums[j]
            nums[j] = -1

    # Adjust the negative values to positive frequencies.
    for i in range(len(nums)):
        if nums[i] < 0:
            nums[i] *= -1
        else:
            nums[i] = 0
    return nums


Python(3.5)
1234
from typing import *


def countFrequency(n: int, m: int, edges: List[List[int]]):
    pass
