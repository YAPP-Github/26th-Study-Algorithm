// 1240. 노드사이의 거리 (골드5)
// https://www.acmicpc.net/problem/1240

const fs = require("fs");

// const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// n: 노드의 수, m: m개의 두 노드 쌍
const [n, m] = input[0].split(" ").map(Number);

// 트리 구조이므로 양방향 그래프 생성
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i < n; i++) {
  const [a, b, d] = input[i].split(" ").map(Number);
  graph[a].push([b, d]);
  graph[b].push([a, d]);
}

// start: 거리를 알고 싶은 시작점, end: 거리를 알고 싶은 끝점
const bfs = (start, end) => {
  const queue = [start];
  const visited = Array(n + 1).fill(false);
  visited[start] = true;

  // 노드 별 거리를 저장하기 위한 배열
  const distance = Array(n + 1).fill(0);

  let head = 0;
  while (head < queue.length) {
    const cur = queue[head++];

    // queue에서 꺼낸 현재 노드가 목표에 도달했다면 바로 return
    if (cur === end) return distance[cur];

    for (let i = 0; i < graph[cur].length; i++) {
      // next: 탐색할 다음 인접 노드, w: 다음 인접 노드의 거리
      const [next, w] = graph[cur][i];

      if (!visited[next]) {
        queue.push(next);
        visited[next] = true;

        // 현재 cur 노드에서 각 노드까지의 누적 거리 합
        distance[next] = distance[cur] + w;
      }
    }
  }
};

for (let i = n; i < n + m; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  const distance = bfs(start, end);

  console.log(distance);
}
