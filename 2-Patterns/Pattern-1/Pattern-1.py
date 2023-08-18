class Solution:
    def printSquare(self, N):

        # This is the outer loop which will loop for the rows.
        for i in range(N):

            #   This is the inner loop which will loop for the columns as we have to print a rectangular pattern.
            for j in range(N):

                # By default when we write print("*"), the default value of the end parameter of the built-in print function is \n (print("hello",end="\n")).
                # So after finishing printing all the variables, a newline character is appended.
                # But we want space after each star, therefore end=" "

                # PRINT *
                print("*", end=" ")

            # After 1 row completes, move to new line for printing.
            # simply write print("") because by default \n is appended.
            # No need to write print("\n"), it will print newline 2 times(1 default, 1 written)
            print("")


# {
# Driver Code Starts
# Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        ob = Solution()
        ob.printSquare(N)
# } Driver Code Ends
