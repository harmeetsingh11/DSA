class Solution:
    def printTriangle(self, N):
        for i in range(1, N+1):

            # spaces
            for j in range(1, N-i+1):
                print(" ", end="")

            # characters
            ch = ord('A')
            mid = int(2*i)/2
            for j in range(1, 2*i):
                print(chr(ch), end="")

                if j < mid:
                    ch += 1
                else:
                    ch -= 1

            # spaces
            for j in range(1, N-i+1):
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
