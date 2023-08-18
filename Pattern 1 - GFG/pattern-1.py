#User function Template for python3

class Solution:
    def printSquare(self, N):
        # Code here
        # rows
         for i in range(N):
            #  columns
            for j in range(N):
                # By default the end key is set by newline character. So after finishing printing all the variables, a newline character is appended. 
                print("*", end=" ")
            print("")


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        ob = Solution()
        ob.printSquare(N)
# } Driver Code Ends