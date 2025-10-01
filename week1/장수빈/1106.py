# 1106. 호텔 (골드 5)

import sys

# c: 확보해야 할 최소 c명, n: 도시의 수
c, n = map(int, (sys.stdin.readline().split())) 

# "최소" 비용을 구하는 문제이므로, 
dp = [float("inf")] * (c + 100)

# 1. 상태 정의: dp[i] -> i는 고객의 수, 고객의 수가 달라질 때마다 최소 비용을 만드는 방법의 수가 달라지기 때문에
# 2. 초기값 세팅: 고객이 0명일 때, 드는 비용은 0원
dp[0] = 0

for _ in range(n):
    cost, person = map(int, (sys.stdin.readline().split()))
    for i in range(len(dp)):
        # 3. 점화식: i명을 확보할 때마다 최소 비용 업데이트
        dp[i] = min(dp[i], dp[i - person] + cost)

print(min(dp[c:]))