# 11053. 가장 긴 증가하는 부분 수열 (실버 2)

import sys

n = int(sys.stdin.readline())  # n: 수열 a의 크기
a = list(map(int, sys.stdin.readline().split()))  # a: 수열 a 리스트

# 1. 상태값 정의
# dp[i] = i번째 숫자까지 봤을 때, i번째 숫자를 포함하는 증가하는 수열의 최대 길이
dp = [1] * n  

for i in range(n):
    for j in range(i):  # 자신보다 앞에 있는 원소들과 모두 비교
        if a[j] < a[i]:  # 앞의 원소가 현재 원소보다 작아야 증가 조건 만족
            dp[i] = max(dp[i], dp[j] + 1)  # 앞의 원소와 대소 비교를 통해 수열의 최대 길이 갱신

print(max(dp))