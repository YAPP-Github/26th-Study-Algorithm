// 4949. 균형잡힌 세상 (실버 4)
// https://www.acmicpc.net/problem/4949

// 문자의 길이 <= 100
// -> 최대 허용 시간복잡도: O(N^3), 알고리즘: 스택, 구현
// 내가 작성한 코드의 시간복잡도: O(N)

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const line = input[i].replace(/\r/g, "").trimEnd();

  if (line === ".") break;

  let stack = [];
  let isBalanced = true;

  for (let j = 0; j < line.length; j++) {
    if (line[j] === "(" || line[j] === "[") {
      stack.push(line[j]);
    } else if (line[j] === ")") {
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        isBalanced = false;
        break;
      }
      stack.pop();
    } else if (line[j] === "]") {
      if (stack.length === 0 || stack[stack.length - 1] !== "[") {
        isBalanced = false;
        break;
      }
      stack.pop();
    }
  }

  if (isBalanced && stack.length === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
