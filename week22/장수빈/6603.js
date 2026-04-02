// 실버 2. 로또
// https://www.acmicpc.net/problem/6603

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let line of input) {
  if (line === "0") break;

  const arr = line.split(" ").map(Number);
  const k = arr[0];
  const S = arr.slice(1);

  const getCombinations = (arr, r) => {
    const result = [];
    const path = [];

    const dfs = (depth, start) => {
      if (depth === r) {
        result.push([...path]);
        return;
      }

      for (let i = start; i < arr.length; i++) {
        path.push(arr[i]);
        dfs(depth + 1, i + 1);
        path.pop();
      }
    };

    dfs(0, 0);
    return result;
  };

  const answers = getCombinations(S, 6);
  for (let i = 0; i < answers.length; i++) {
    console.log(answers[i].join(" "));
  }

  console.log("");
}
