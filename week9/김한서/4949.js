const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
});

rl.on("close", function () {
  for (const line of input) {
    if (line === ".") break;

    let stack = [];
    let isBalanced = true;

    for (const ch of line) {
      if (ch === "(" || ch === "[") {
        stack.push(ch);
      } else if (ch === ")") {
        if (stack.length === 0 || stack[stack.length - 1] !== "(") {
          isBalanced = false;
          // 더 이상 검사할 필요 없음
          break;
        }
        stack.pop();
      } else if (ch === "]") {
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
});
