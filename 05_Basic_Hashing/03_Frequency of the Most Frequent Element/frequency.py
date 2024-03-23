from collections import Counter
from typing import List

def getFrequencies(v: List[int]) -> List[int]:
    # Create a Counter object to count the frequencies of elements.
    freq = Counter(v)

    # Initializing variables to determine.
    # Maximum frequency and minimum frequency element.
    maxFreq = 0
    minFreq = float('inf')
    maxElement = 0
    minElement = float('inf')
    
    # Traverse through Counter to find the elements.
    for element, count in freq.items():
        if count > maxFreq:
            # Found an element with frequency maximum among 
            # all elements found till now.
            maxElement = element
            maxFreq = count
        elif count == maxFreq:
            # Checking if the current element is smaller or not.     
            maxElement = min(maxElement, element)
        
        if count < minFreq:
            # Found an element with frequency minimum among 
            # all elements found till now.
            minElement = element
            minFreq = count
        elif count == minFreq:
            # Checking if the current element is smaller or not.         
            minElement = min(minElement, element)
    
    ans = [maxElement, minElement]
    return ans