let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
let queue = [];
let head = 0;   
let output = [];

for (let i = 1; i <= N; i++) {
  const cmd = input[i];

  if (cmd.startsWith("push")) {
    const [, value] = cmd.split(" ");
    queue.push(value);
  } else if (cmd === "pop") {
    if (head >= queue.length) output.push(-1);
    else output.push(queue[head++]);
  } else if (cmd === "size") {
    output.push(queue.length - head);
  } else if (cmd === "empty") {
    output.push(head >= queue.length ? 1 : 0);
  } else if (cmd === "front") {
    if (head >= queue.length) output.push(-1);
    else output.push(queue[head]);
  } else if (cmd === "back") {
    if (head >= queue.length) output.push(-1);
    else output.push(queue[queue.length - 1]);
  }
}

console.log(output.join("\n"));