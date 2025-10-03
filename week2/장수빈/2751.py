# 2751. 수 정렬하기 2 (실버 5)

import sys

# n: 수의 개수
n = int(sys.stdin.readline())
num_arr = []

for _ in range(n):
    num = int(sys.stdin.readline())
    num_arr.append(num)

num_arr.sort()

for num in num_arr:
    print(num)