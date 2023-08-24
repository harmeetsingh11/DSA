class Solution:
    def printTriangle(self, N):

        # outer loop for number of rows/lines
        for i in range(1, N+1):

            # nums
            for j in range(1, i+1):
                print(j, end=" ")

            # spaces
            for j in range(1, (2*N-2*i)+1):
                print(" ", end=" ")

            # nums
            for j in range(1, i+1):
                print(i, end=" ")
                # in right side triangle, we need to print -> 3 2 1, nums starts from i(row no.)
                # it decrements because first time print 3, then 2, then 1
                i -= 1

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
