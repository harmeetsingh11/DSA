from typing import List


def recursiveFunction(nums: List[int], start: int, end: int):
    # base case
    if start >= end:
        return
    else:
        # first swap the first and last elements, rest we can trust the function
        nums[start], nums[end] = nums[end], nums[start]
        # Trust the function
        recursiveFunction(nums, start+1, end-1)


def reverseArray(n: int, nums: List[int]) -> List[int]:
    recursiveFunction(nums, 0, n-1)
    return nums


if __name__ == "__main__":
    n = int(input())
    # Prompt the user to input 'n' elements separated by spaces,
    # split the input into a list, and convert the elements to integers.
    # Finally, use list slicing [:n] to limit the number of elements to 'n'.
    nums = list(map(int, input().split()))[:n]
    print(reverseArray(n, nums))
