def countFrequency(n: int, x: int, nums: List[int]) -> int:
    # Initialize a dictionary to store the frequencies of elements
    freq_map = {}

    # Count frequencies of elements within the specified range
    for num in nums:
        if 1 <= num <= n:
            freq_map[num] = freq_map.get(num, 0) + 1

    # Return the frequency of the specified element
    return freq_map.get(x, 0)
