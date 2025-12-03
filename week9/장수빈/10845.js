// 10845. 큐 (실버4)
// https://www.acmicpc.net/problem/10845

const fs = require("fs");

// const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let queue = [];
let result = [];

for (let i = 1; i <= N; i++) {
  const [command, number] = input[i].split(" ");

  if (command === "push") {
    queue.push(Number(number));
  } else if (command === "pop") {
    if (queue.length === 0) {
      result.push(-1);
    } else {
      result.push(queue[0]);
      queue.shift();
    }
  } else if (command === "size") {
    result.push(queue.length);
  } else if (command === "empty") {
    if (queue.length === 0) result.push(1);
    else result.push(0);
  } else if (command === "front") {
    if (queue.length > 0) result.push(queue[0]);
    else result.push(-1);
  } else if (command === "back") {
    if (queue.length > 0) result.push(queue[queue.length - 1]);
    else result.push(-1);
  }
}

console.log(result.join("\n"));
