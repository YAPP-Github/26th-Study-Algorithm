# 팩토리얼 0의 개수

import sys
from math import factorial

n = int(sys.stdin.readline()) 

# print(factorial(n))

# print(factorial(5))
# print(factorial(10))
# print(factorial(15))
# print(factorial(20))
# print(factorial(25))
# print(factorial(30))

print(n // 5 + n // 25 + n // 125)