class Solution:
    def printTriangle(self, N):
        for i in range(1, N+1):
            # inner loop for columns
            # ord() to get ASCII code of char
            for j in range(ord('A'), ord('A')+(N-i)+1):
                # chr() used to get a string representing of a character which points to a Unicode code integer eg: ch(65)=A
                print(chr(j), end="")
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
