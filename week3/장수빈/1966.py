# 1966. 프린터 큐 (실버 3)

import sys
from collections import deque

# k: 테스트 케이스의 수
k = int(sys.stdin.readline()) 

for _ in range(k):
    n, m = map(int, sys.stdin.readline().split())
    rank = list(map(int, sys.stdin.readline().split()))
    queue = deque([i for i in enumerate(rank)])

    count = 0
    
    # queue가 빌 때까지 반복
    while queue:
        cur_item = queue.popleft()

        # 현재 요소보다 우선순위가 높은 요소가 하나라도 있으면 맨 뒤로 삽입 (출력 X)
        if any(cur_item[1] < other[1] for other in queue):
            queue.append(cur_item)
        else:
            count += 1
            if m == cur_item[0]:
                print(count)
                break