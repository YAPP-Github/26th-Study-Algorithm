const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = [];

const match = {
  ")": "(",
  "]": "[",
};

for (let i = 0; i < input.length; i++) {
  const line = input[i];

  if (line === ".") break;

  const stack = [];
  let isBalanced = true;

  for (let char of line) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "]") {
      if (stack.length === 0 || stack[stack.length - 1] !== match[char]) {
        isBalanced = false;
        break;
      }

      stack.pop();
    }
  }

  if (stack.length > 0) {
    isBalanced = false;
  }

  answer.push(isBalanced ? "yes" : "no");
}

console.log(answer.join("\n"));
