# 16926. 배열 돌리기 1 (골드 5)

import sys
from collections import deque

n, m, r = map(int, sys.stdin.readline().split())
graph = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]

for layer in range(min(n, m) // 2):
    positions = []  # 회전시킬 좌표들을 담을 리스트
    values = []  # 그 좌표에 들어있는 숫자들을 담음

    # 1. 위 -> 아래
    for i in range(layer, n - layer):
        positions.append((i, layer))
        values.append(graph[i][layer])

    # 2. 왼 -> 오
    for j in range(layer + 1, m - layer):
        positions.append((n - 1 - layer, j))
        values.append(graph[n - 1 - layer][j])

    # 3. 아래 -> 위
    for i in range(n - 2 - layer, layer - 1, -1):
        positions.append((i, m - 1 - layer))
        values.append(graph[i][m - 1 - layer])

    # 4. 오 -> 왼
    for j in range(m - 2 - layer, layer, -1):
        positions.append((layer, j))
        values.append(graph[layer][j])

    # 회전
    queue = deque(values)
    queue.rotate(r)
    rotated = list(queue)

    for idx, (x, y) in enumerate(positions):
        graph[x][y] = rotated[idx]

for row in graph:
    print(*row)