# 2667. 단지번호붙이기 (실버 1)

import sys
from collections import deque

# n: 지도 크기 n * n
n = int(sys.stdin.readline())

# 지도 생성
graph = []
for _ in range(n):
    arr = list(map(int, (sys.stdin.readline().strip())))
    graph.append(arr)

# 상, 하, 좌, 우 방향 벡터 생성
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# 방문 여부 판단을 위한 배열 생성
visited = [[False] * n for _ in range(n)]

# 각 단지 내 집의 수를 저장할 배열 생성
house_arr = []

# 단지 내 집이 몇개있는지 탐색하는 함수
def bfs(x, y):
    # 0. 탐색할 노드 큐에 삽입
    queue = deque([(x, y)])
    visited[x][y] = True
    count = 1

    while queue:
        # 1. 탐색할 노드 꺼내기
        x, y = queue.popleft()

        # 2. 탐색할 노드를 기준으로 상, 하, 좌, 우 탐색
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            # 3. n * n 크기를 넘어가지 않게 범위 조절
            if 0 <= nx < n and 0 <= ny < n:
                # 4. graph의 요소가 1이면서, visited가 False 일 경우만 탐색 
                if graph[nx][ny] == 1 and not visited[nx][ny]:
                    visited[nx][ny] = True
                    queue.append((nx, ny))
                    count += 1
    
    return count

# 전체 지도를 순회하면서 단지 시작점 찾기
for i in range(n):
    for j in range(n):
        if graph[i][j] == 1 and not visited[i][j]:
            count = bfs(i, j)
            house_arr.append(count)

house_arr.sort()      

print(len(house_arr))
for house in house_arr:
    print(house)
                

