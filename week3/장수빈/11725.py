# 11725번: 트리의 부모 찾기

from collections import deque
import sys

n = int(sys.stdin.readline())

graph = [[] for _ in range(n + 1)]

# 트리 간선 이어주기
for _ in range(n - 1):
    a, b = map(int, sys.stdin.readline().split())
    graph[a].append(b)
    graph[b].append(a)

# bfs로 풀기 위한 큐 생성, 1번 노드가 루트 노드로 시작
queue = deque([1])

# 각 노드의 부모를 저장할 리스트 생성
parent = [0] * (n + 1)

while queue:
    v = queue.popleft()
    for node in graph[v]:
        if not parent[node]:
            parent[node] = v
            queue.append(node)

for i in range(2, n + 1):
    print(parent[i])