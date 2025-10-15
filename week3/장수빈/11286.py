# 11286번: 절댓값 힙

import sys
import heapq

# n = 연산의 개수
n = int(sys.stdin.readline())
arr = [int(sys.stdin.readline().strip()) for _ in range(n)]

min_heap = []
for num in arr:
    if num == 0:
        if min_heap:
            # heap에서 가장 작은 값을 뺀 후, 절댓값이 아닌 숫자만 출력
            print(heapq.heappop(min_heap)[1])
        else:
            print(0)
    else:
        # 절댓값인 경우와 주어진 숫자를 튜플 형태로 동시에 삽입
        heapq.heappush(min_heap, (abs(num), num))