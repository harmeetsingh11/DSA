class Solution:
    def printTriangle(self, N):
        # outer loop for number of rows/lines
        for i in range(1, N+1):
            # inner loop for columns
            for j in range(1, N+1):
                # conditions when star will be printed
                if (i == 1 or i == N or j == 1 or j == N):
                    print("*", end="")
                else:
                    print(" ", end="")
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
