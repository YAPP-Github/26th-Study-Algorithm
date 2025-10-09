# 14503. 로봇 청소기 (골드 5)

import sys
from collections import deque

n, m = map(int, (sys.stdin.readline().split()))  # n: 행, m: 열
r, c, d = map(int, (sys.stdin.readline().split()))  # (r, c): 현재 로봇 청소기가 있는 위치, d: 방향

# 방 그래프 생성
graph = [list(map(int, (sys.stdin.readline().split()))) for _ in range(n)]
visited = [[False for _ in range(m)] for _ in range(n)]

# 북(-1, 0), 동(0, 1), 남(1, 0), 서(0, -1) 방향 벡터 생성
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

# 현재 로봇 청소기 위치 좌표(x, y), 현재 로봇 청소기 방향(d)
def bfs(x, y, d):
    queue = deque([(x, y, d)])
    visited[x][y] = True
    count = 1

    while queue:
        x, y, d = queue.popleft()

        # 4방향 중, 청소할 칸이 있는지 여부
        cleaned = False

        # 동, 서, 남, 북 이동 가능
        for i in range(4):
            nd = (d + 3 - i) % 4  # 인덱스 i를 기준으로 반시계 방향으로 회전
            nx = x + dx[nd]
            ny = y + dy[nd]

            # 이동할 수 있는 범위 설정
            if 0 <= nx < n and 0 <= ny < m:
                if graph[nx][ny] == 0 and not visited[nx][ny]:
                    queue.append((nx, ny, nd))
                    visited[nx][ny] = True
                    cleaned = True  # 청소할 칸이 있다면 해당 칸으로 넘어가서 청소해야됨 -> break문으로 반복문 빠져나오기
                    count += 1
                    break
        
        # 4방향 중 청소할 칸이 없다면, 뒤로 후진
        if not cleaned:
            bd = (d + 2) % 4
            bx = x + dx[bd]
            by = y + dy[bd]

            # 후진 가능한 방이라면 (0이라면)
            if graph[bx][by] == 0:
                queue.append((bx, by, d))
            # 후진 불가능하면 작동 stop
            else:
                break
            
    return count

count = bfs(r, c, d)
print(count)