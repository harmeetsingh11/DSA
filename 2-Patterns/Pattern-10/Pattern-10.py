class Solution:
    def printTriangle(self, N):
        # outer loop for number of rows/lines
        for i in range(1, 2*N):

            # stars would be equal to the row no. until first half
            stars = i

            # for the second half of the rotated triangle.
            if i > N:
                stars = 2*N-i

            # for printing the stars in each row
            for j in range(1, stars+1):
                print("* ", end="")
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
