// 골드 4. 저울
// https://www.acmicpc.net/problem/10159

// 5 <= n <= 100, 0 <= m <= 2,000
// 알고리즘: BFS

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);

const heavy = Array.from({ length: n + 1 }, () => []);
const light = Array.from({ length: n + 1 }, () => []);

for (let i = 2; i < m + 2; i++) {
  const [parent, child] = input[i].split(" ").map(Number);
  heavy[parent].push(child);
  light[child].push(parent);
}

const bfs = (start, graph) => {
  const visited = Array(n + 1).fill(false);
  const queue = [start];
  visited[start] = true;

  let head = 0;
  let count = 0;

  while (head < queue.length) {
    const node = queue[head++];

    for (const nextNode of graph[node]) {
      if (!visited[nextNode]) {
        queue.push(nextNode);
        visited[nextNode] = true;
        count++;
      }
    }
  }

  return count;
};

for (let i = 1; i <= n; i++) {
  const lightCount = bfs(i, heavy); // i보다 가벼운 요소 찾기
  const heavyCount = bfs(i, light); // i보다 무거운 요소 찾기

  console.log(n - (heavyCount + lightCount + 1));
}
