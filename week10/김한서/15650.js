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
  const answer = [];
  const comb = [];

  function dfs(start, depth) {
    if (depth === m) {
      answer.push(comb.join(" "));
      return;
    }
    for (let i = start; i <= n; i++) {
      comb.push(i);
      dfs(i + 1, depth + 1);
      comb.pop();
    }
  }
  dfs(1, 0);

  console.log(answer.join("\n"));
});

// 재귀함수(백트래킹)으로 모든 조합의 수를 고려
// 하나의 조합을 트리에서 리프 노드까지의 경로라고 생각
// 깊이(depth) = m
// 자식 노드로 갈수록 선택되는 값이 커지도록
