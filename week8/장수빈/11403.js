// 11403. 경로 찾기 (실버 1)
// https://www.acmicpc.net/problem/11403

// 1 <= N <= 100
// 인접 행렬이므로 간선 수는 최대 N^2 = 10,000
// -> 최대 허용 시간복잡도: O(N^3), 알고리즘: BFS
// 내가 작성한 코드의 시간복잡도: O(N^3)

const fs = require("fs");

// const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const results = Array.from({ length: N }, () => Array(N).fill(0));

// i -> j로 갈 수 있는 곳만 그래프 만들기
const graph = Array.from({ length: N }, () => []);
for (let i = 0; i < N; i++) {
  const arr = input[i + 1].split(" ").map(Number);

  for (let j = 0; j < N; j++) {
    if (arr[j] === 1) {
      graph[i].push(j);
      results[i][j] = 1;
    }
  }
}

const BFS = (start) => {
  const queue = [start];

  // 0 -> 1 -> 2 -> 0처럼 순회하는 경우가 있으므로, 처음부터 start 노드를 방문 처리 하지 않음
  const visited = Array(N).fill(false);

  let head = 0;

  while (head < queue.length) {
    const cur = queue[head++];

    for (let i = 0; i < graph[cur].length; i++) {
      const nextNode = graph[cur][i];

      if (!visited[nextNode]) {
        visited[nextNode] = true;
        queue.push(nextNode);
        results[start][nextNode] = 1;
      }
    }
  }
};

for (let i = 0; i < N; i++) {
  BFS(i);
}

for (const arr of results) {
  console.log(arr.join(" "));
}
