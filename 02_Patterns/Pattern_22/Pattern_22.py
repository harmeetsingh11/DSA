class Solution:
    def printTriangle(self, N):
        # outer loop for number of rows/lines
        for i in range(1, 2*N):
            # inner loop for columns
            for j in range(1, 2*N):

                # the distance from the current cell to the top edge of the grid
                top_dist = i

                #  the distance from the current cell to the left edge of the grid
                left_dist = j

                # the distance from the current cell to the bottom edge of the grid
                bottom_dist = 2*N-i

                # the distance from the current cell to the right edge of the grid
                right_dist = 2*N-j

                # min(top,left,right,bottom) will print the pattern in reverse fashion (1’s at the border of the square, then 2 in the inner perimeter, then 3, and so on)

                # (N+1) - min(top,left,right, bottom) will print the given pattern (N at the border of the square, then N-1 in the inner perimeter, centermost element with the integer 1)
                print((N+1)-min(top_dist, bottom_dist,
                      left_dist, right_dist), end=" ")

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
