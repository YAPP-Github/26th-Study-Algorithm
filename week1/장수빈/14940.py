# 쉬운 최단거리

import sys
from collections import deque

# 그래프 탐색
n, m = map(int, (sys.stdin.readline().split())) # n: 세로 크기, m: 가로 크기
graph = []  # 입력값을 담을 2차원 배열

# 2의 위치
start_n = 0
start_m = 0

# 결과를 저장할 results 배열 생성
results = [[-1 for _ in range(m)] for _ in range(n)]

# 2의 좌표 및 입력값을 토대로 2차원 배열을 만드는 반복문
for i in range(n):
    row = list(map(int, (sys.stdin.readline().split())))
    graph.append(row)

    for j in range(m):
        if row[j] == 2:
            start_n = i
            start_m = j
        
        if row[j] == 0:
            results[i][j] = 0

# 2의 좌표는 자기자신이므로 갈 수 없는 땅임을 표시하는 0으로 초기값 세팅
results[start_n][start_m] = 0

# 큐를 이용하여 그래프 탐색
queue = deque([(start_n, start_m)])

# 방문 여부를 확인하는 배열 생성
visited = [[False for _ in range(m)] for _ in range(n)]
visited[start_n][start_m] = True

# 상하좌우로 움직일 좌표 설정
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# 그래프 탐색
while queue:
    # 1. 탐색할 노드 꺼내기
    x, y = queue.popleft()

    # 2. 상하좌우 탐색
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        # 3. 움직일 수 있는 범위 설정
        # 3-1. 탐색하다가 좌표 밖(n, m)을 나가면 안되므로 조건문 설정
        if 0 <= nx < n and 0 <= ny < m:  
            # 3-2. 이미 방문한 좌표와 갈 수 없는 땅은 가면 안되므로 조건문 설정
            if visited[nx][ny] == False and graph[nx][ny] != 0:
                visited[nx][ny] = True
                results[nx][ny] = results[x][y] + 1
                queue.append([nx, ny])

# 결과값 출력
for row in results:
    print(" ".join(map(str, row)))