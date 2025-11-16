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
  const [n, m] = input[0].split(" ").map(Number);
  let idx = 1;
  let answer = [];
  let graph = Array.from({ length: n + 1 }, () => []);

  // 인접 노드 추가
  for (let i = 0; i < m; i++) {
    const [a, b] = input[idx++].split(" ").map(Number);
    graph[b].push(a);
  }

  // 인접 노드의 수 리턴
  function dfs(start) {
    const q = [start];
    const visited = new Array(n + 1).fill(false);
    let cnt = 1;
    visited[start] = true;
    while (q.length > 0) {
      const current = q.pop();
      for (let i = 0; i < graph[current].length; i++) {
        const next = graph[current][i];
        if (!visited[next]) {
          visited[next] = true;
          q.push(next);
          cnt++;
        }
      }
    }
    return cnt;
  }

  let maxCount = 0;

  // 인접 노드의 수가 가장 많은 노드를 탐색
  for (let i = 1; i <= n; i++) {
    const cnt = dfs(i);
    if (cnt > maxCount) {
      maxCount = cnt;
      answer.length = 0;
      answer.push(i);
    } else if (cnt === maxCount) {
      answer.push(i);
    }
  }
  console.log(answer.join(" "));
});
