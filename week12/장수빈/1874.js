// 실버2. 스택 수열
// https://www.acmicpc.net/problem/1874

// 1 <= n <= 100,000
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: 스택
// 작성한 코드의 알고리즘: O(N)

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1).map(Number);

let stack = [];
let curNum = 1;

let results = [];

for (let i = 0; i < n; i++) {
  // arr[i]가 스택에 담길 때까지 while
  while (curNum <= arr[i]) {
    stack.push(curNum);
    results.push("+");
    curNum++;
  }

  if (stack[stack.length - 1] === arr[i]) {
    stack.pop();
    results.push("-");
  }
}

if (stack.length === 0) {
  console.log(results.join("\n"));
} else {
  console.log("NO");
}
