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
  let res = [];

  function dfs(depth, start, arr) {
    if (depth === m) {
      res.push([...arr]);
      return;
    }

    for (let i = start; i <= n; i++) {
      dfs(depth + 1, i + 1, [...arr, i]);
    }
  }
  dfs(0, 1, []);
  for (let el of res) {
    console.log(...el);
  }
});

// DFS 재귀 호출 -> 수열을 하나씩 생성
// depth는 현재 수열 길이, start는 오름차순과 중복 방지
// depth === m이면 결과에 추가
