class Solution:
    def printTriangle(self, N):
        # Outer loop for number of rows/lines
        for i in range(1, N+1):

            if i % 2 == 0:
                start = 0   # If i is even, start with 0
            else:
                start = 1   # If i is odd, start with 1

            # Inner loop for columns to print the values in the row
            for j in range(1, i+1):

                print(start, end=" ")

                # toggle start from 1 to 0 and 0 to 1
                start = 1-start

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
