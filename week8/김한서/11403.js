const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", function () {
  const n = Number(input[0]);
  let index = 1;
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph.push(input[index++].split(" ").map(Number));
  }
  let result = Array.from({ length: n }, () => Array(n).fill(0));
  let visited;

  function dfs(node, visited) {
    for (let i = 0; i < n; i++) {
      if (graph[node][i] === 1 && !visited[i]) {
        visited[i] = true;
        dfs(i, visited);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    visited = Array(n).fill(false);
    dfs(i, visited);
    for (let j = 0; j < n; j++) {
      if (visited[j]) result[i][j] = 1;
    }
  }

  result.forEach((row) => console.log(row.join(" ")));
});
