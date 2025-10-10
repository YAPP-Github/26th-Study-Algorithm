# 1158. 요세푸스 문제 (실버 4)

import sys
from collections import deque

# n: n명의 사람, k: 제거되어야 할 순서
n, k = map(int, (sys.stdin.readline().split())) 

queue = deque([i for i in range(1, n + 1)])
results = []

# queue에 요소가 있으면 반복
while queue:
    # k-1만큼 반시계 방향으로 회전하여 제거해야 될 대상을 첫번째 인덱스로 오게끔
    queue.rotate(-(k - 1))
    delete_item = queue.popleft()
    results.append(delete_item)

print("<" + ", ".join(map(str, results)) + ">")