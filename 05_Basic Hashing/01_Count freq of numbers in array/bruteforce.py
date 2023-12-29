from typing import *


def countFrequency(n: int, x: int, nums: List[int]) -> int:
    freq = [0 for _ in range(n)]

    for i in range(1, n + 1):
        for j in range(len(nums)):
            if nums[j] == i:
                freq[i - 1] += 1
    return freq
