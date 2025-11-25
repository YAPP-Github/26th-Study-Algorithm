const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const INF = Infinity;

const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(INF));

for (let i = 1; i <= N; i++) {
  graph[i][i] = 0;
}

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a][b] = 1;
  graph[b][a] = 1;
}

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (graph[i][j] > graph[i][k] + graph[k][j]) {
        graph[i][j] = graph[i][k] + graph[k][j];
      }
    }
  }
}

let minSum = INF;
let answer = 0;

for (let i = 1; i <= N; i++) {
  let currentSum = 0;

  for (let j = 1; j <= N; j++) {
    if (graph[i][j] !== INF) {
      currentSum += graph[i][j];
    }
  }

  if (currentSum < minSum) {
    minSum = currentSum;
    answer = i;
  }
}

console.log(answer);
