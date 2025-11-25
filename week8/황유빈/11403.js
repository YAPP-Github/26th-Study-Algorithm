const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);

const graph = [];
for (let i = 1; i <= N; i++) {
  graph.push(input[i].split(" ").map(Number));
}

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] === 0) {
        if (graph[i][k] === 1 && graph[k][j] === 1) {
          graph[i][j] = 1;
        }
      }
    }
  }
}

const result = graph.map((row) => row.join(" ")).join("\n");
console.log(result);
