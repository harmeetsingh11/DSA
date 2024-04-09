n = int(input())
given_num = n


def check_palindrome(n) -> str:

    rev_num = 0
    while n > 0:
        last_digit = n % 10
        n //= 10
        rev_num = (rev_num*10) + last_digit

    # By default, bool return True/False with first letter capital
    # But as per problem statement, we have to return true/false
    # therefore we converted the bool to string, then to lowercase
    return str(rev_num == given_num).lower()


print(check_palindrome(n))
