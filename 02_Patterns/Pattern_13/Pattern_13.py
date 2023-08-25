class Solution:
    def printTriangle(self, N):

        # num variable for print
        num = 1
        # outer loop for number of rows/lines
        for i in range(1, N+1):

            # inner loop for columns
            for j in range(1, i+1):
                print(num, end=" ")

                # increment num after print
                num += 1

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
