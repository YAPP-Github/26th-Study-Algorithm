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
  const n = Number(input[0]);
  let index = 1;
  let queue = [];
  let front = 0;
  let result = [];

  for (let i = 0; i < n; i++) {
    const command = input[index++].split(" ");
    const cmd = command[0];
    if (cmd === "push") {
      queue.push(command[1]);
    } else if (cmd === "pop") {
      queue.length === front ? result.push(-1) : result.push(queue[front++]);
    } else if (cmd === "size") {
      result.push(queue.length - front);
    } else if (cmd === "empty") {
      queue.length === front ? result.push(1) : result.push(0);
    } else if (cmd === "front") {
      queue.length === front ? result.push(-1) : result.push(queue[front]);
    } else if (cmd === "back") {
      queue.length === front
        ? result.push(-1)
        : result.push(queue[queue.length - 1]);
    }
  }

  console.log(result.join("\n"));
});

// 시간초과
// shift()는 시간초과 유발
// result에 한번에 담고 한번에 출력하기
// front는 현재 앞을 가리키는 포인터, pop 시 front++; (배열의 요소를 실제로 삭제 X)
