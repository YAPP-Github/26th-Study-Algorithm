// 1389. 케빈 베이컨의 6단계 법칙 (실버1)
// https://www.acmicpc.net/problem/1389

// 2 <= N <= 100, 1 <= M <= 5,000
// -> 최대 허용 시간복잡도: O(N^3), 알고리즘: BFS (양방향 그래프)
// 내가 작성한 코드의 시간복잡도: O(N^2)

const fs = require("fs");

// const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// N: 유저의 수, M: 유저 간 관계의 수
const [N, M] = input[0].split(" ").map(Number);

// 친구 관계를 토대로 양방향 그래프 생성
const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// start: 친구 시작점
const bfs = (start) => {
  const queue = [start];
  const visited = Array(N + 1).fill(false);
  visited[start] = true;

  const distance = Array(N + 1).fill(0);

  let head = 0;

  while (head < queue.length) {
    const cur = queue[head++];

    for (let i = 0; i < graph[cur].length; i++) {
      const next = graph[cur][i];
      if (!visited[next]) {
        queue.push(next);
        visited[next] = true;
        distance[next] = distance[cur] + 1;
      }
    }
  }

  return distance.reduce((acc, cur) => acc + cur, 0);
};

const results = [];

for (let i = 1; i <= N; i++) {
  const sum = bfs(i); // O(N + M)
  results.push(sum);
}

const minResult = Math.min(...results);

for (let i = 0; i < results.length; i++) {
  if (results[i] === minResult) {
    console.log(i + 1);
    break;
  }
}
