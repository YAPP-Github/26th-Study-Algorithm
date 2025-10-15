# 11279번: 최대 힙

import sys
import heapq

# n = 연산의 개수
n = int(sys.stdin.readline())
arr = [int(sys.stdin.readline().strip()) for _ in range(n)]

max_heap = []
for num in arr:
    if num == 0:
        if max_heap:
            # heapq는 최소 힙만 제공하므로, 최대 힙을 사용하고 싶다면 값을 음수로 넣기
            print(-heapq.heappop(max_heap))
        else:
            print(0)
    else:
        heapq.heappush(max_heap, -num)