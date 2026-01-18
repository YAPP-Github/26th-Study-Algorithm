// 실버 3. 모든 순열
// https://www.acmicpc.net/problem/10974

// 1 <= n <= 8
// -> 최대 허용 시간복잡도: 뭐든 OK, 알고리즘: 백트래킹 + 순열 (순서가 중요)
// 작성한 코드의 알고리즘: O(N!)

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(i);
}

const permutations = (arr, r) => {
  const visited = Array(arr.length).fill(false);
  const results = [];
  const path = [];

  const dfs = (depth) => {
    if (depth === r) {
      results.push([...path]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      path.push(arr[i]);
      dfs(depth + 1);
      path.pop();
      visited[i] = false;
    }
  };

  dfs(0);
  return results;
};

const results = permutations(arr, n);

for (let i = 0; i < results.length; i++) {
  console.log(results[i].join(" "));
}
