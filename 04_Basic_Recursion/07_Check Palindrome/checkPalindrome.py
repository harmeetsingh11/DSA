def isPalindromeHelper(s: str, start: int, end: int) -> str:

    # Base Condition
    # If start exceeds end or half of the string, means all the elements 
    # are compared, we return true.
    if start >= end:
        return True
    
    # If first and last character is not same, then not palindrome
    if s[start] != s[end]:
        return False
    
    # If both characters are same, increment i and check start+1 and end-1.
    else:
        return isPalindromeHelper(s, start+1, end-1)


def isPalindrome(string: str) -> bool:
    return isPalindromeHelper(string, 0, len(string)-1)


# Driver Code
if __name__ == "__main__":
    # Example String
    s = "abcd"
    print(isPalindrome(s).lower())