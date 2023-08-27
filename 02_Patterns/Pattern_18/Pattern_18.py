class Solution:
    def printTriangle(self, N):
        for i in range(1, N+1):
            # char start
            ch = ord('A')+(N-i)
            for j in range(1, i+1):
                print(chr(ch), end=" ")
                ch += 1
            print()


# {
# Driver Code Starts
# Initial Template for Python 3
if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        ob = Solution()
        ob.printTriangle(N)
# } Driver Code Ends
