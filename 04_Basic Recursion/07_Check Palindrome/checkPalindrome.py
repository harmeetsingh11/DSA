def recursiveFunction(s: str, start: int, end: int) -> str:
    if start >= end:
        return "true"
    # if first and last character is not same, then not palindrome
    if s[start] != s[end]:
        return "false"
    else:
        return recursiveFunction(s, start+1, end-1)


def isPalindrome(string: str) -> bool:
    return recursiveFunction(string, 0, len(string)-1)


# Driver Code
if __name__ == "__main__":
    s = "madam"
    print(isPalindrome(s).lower())
