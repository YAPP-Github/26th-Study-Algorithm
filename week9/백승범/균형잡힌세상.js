let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

input.forEach(line => {
  if (line === ".") return;

  const stack = [];
  let isBalanced = true;

  line.split('').some(ch => {
    if (ch === '(' || ch === '[') {
      stack.push(ch);
    } else if (ch === ')') {
      if (stack.pop() !== '(') {
        isBalanced = false;
        return true; // break
      }
    } else if (ch === ']') {
      if (stack.pop() !== '[') {
        isBalanced = false;
        return true; // break
      }
    }
    return false;
  });

  result.push(isBalanced && stack.length === 0 ? "yes" : "no");
});

console.log(result.join("\n"));