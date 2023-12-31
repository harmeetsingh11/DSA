# Function to count the frequency of numbers from 1 to n in the given array 'nums'.
def countFrequency(n: int, x: int, nums: List[int]) -> int:
    ans = [0 for _ in range(n)]

    for i in range(len(nums)):
        if nums[i] <= n:
            ans[nums[i] - 1] += 1
    return ans
