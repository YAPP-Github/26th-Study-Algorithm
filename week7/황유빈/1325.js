const fs = require("fs");
const inputPath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/yubin/26th-Study-Algorithm/week7/황유빈/input.txt";

const input = fs
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let cursor = 0;
const N = input[cursor++];
const M = input[cursor++];

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const a = input[cursor++];
  const b = input[cursor++];

  graph[b].push(a);
}

const visited = new Array(N + 1).fill(false);

function bfs(start) {
  visited.fill(false);

  let queue = [start];
  visited[start] = true;

  let count = 0;
  let head = 0;

  while (queue.length > head) {
    const node = queue[head++];
    count++;

    const connectedNodes = graph[node];
    for (let i = 0; i < connectedNodes.length; i++) {
      const nextNode = connectedNodes[i];
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        queue.push(nextNode);
      }
    }
  }

  return count;
}

let maxCount = 0;
let result = [];

for (let i = 1; i <= N; i++) {
  const currentCount = bfs(i);

  if (currentCount > maxCount) {
    maxCount = currentCount;
    result = [i];
  } else if (currentCount === maxCount) {
    result.push(i);
  }
}

console.log(result.join(" "));
