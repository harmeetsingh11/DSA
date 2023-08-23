class Solution:
    def printDiamond(self, N):
        # UPPER TRIANGLE
        # outer loop for no. of lines
        for i in range(1, N+1):

            # for spaces
            for j in range(1, (N-i)+1):
                print(" ", end="")

            # for stars
            for j in range(1, 2*i):
                print("*", end="")

            # for spaces
            for j in range(1, (N-i)+1):
                print(" ", end="")

            print()

        # LOWER TRIANGLE
        # outer loop for no. of lines
        for i in range(1, N+1):

            # for spaces
            for j in range(1, i):
                print(" ", end="")

            # for stars
            for j in range(1, (2*N-(2*i-1))+1):
                print("*", end="")

            # for spaces
            for j in range(1, i):
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
        ob.printDiamond(N)
# } Driver Code Ends
