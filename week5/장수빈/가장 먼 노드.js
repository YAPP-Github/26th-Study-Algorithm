// 가장 먼 노드 LV3
// https://school.programmers.co.kr/learn/courses/30/lessons/49189

function solution(n, edge) {
  // 1. 양방향 그래프 생성
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // 2. BFS로 그래프 탐색
  const visited = Array(n + 1).fill(false);
  const distance = Array(n + 1).fill(0);
  const queue = [1];
  visited[1] = true;

  while (queue.length) {
    const node = queue.shift();

    for (const next of graph[node]) {
      if (!visited[next]) {
        distance[next] = distance[node] + 1; // 인접 노드 거리 = 현재 노드 + 1
        visited[next] = true;
        queue.push(next);
      }
    }
  }

  const maxLength = Math.max(...distance);

  const answer = distance.filter((x) => x === maxLength).length;

  return answer;
}
