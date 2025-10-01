# 좌표 정렬하기

import sys

n = int(sys.stdin.readline()) # n: 좌표의 개수
arr = []

for _ in range(n):
    x, y = map(int, (sys.stdin.readline().split()))
    arr.append([x, y])

# 먼저 x를 기준으로 정렬, x가 같을 경우 y를 기준으로 정렬
arr.sort(key=lambda i: (i[0], i[1]))

for nums in arr:
    print(' '.join(map(str, nums)))