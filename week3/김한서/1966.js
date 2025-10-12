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
  const t = Number(input[0]);
  let line = 1;
  for (let i = 0; i < t; i++) {
    const [n, m] = input[line++].split(" ").map(Number);
    const arr = input[line++].split(" ").map(Number);
    let queue = [];
    arr.forEach((val, idx) => {
      queue.push([val, idx]);
    });
    let cnt = 0;

    while (queue.length > 0) {
      const current = queue.shift();
      if (queue.some((docs) => docs[0] > current[0])) {
        queue.push(current);
      } else {
        cnt++;
        if (current[1] === m) {
          console.log(cnt);
          break;
        }
      }
    }
  }
});

// 문서들을 [중요도, 원래 위치] 형태로 큐에 저장
// 큐의 맨 앞 문서를 꺼냄
// 나머지 중 더 높은 중요도가 있으면 뒤로 보냄
// 아닌 경우에 인쇄(= 카운트 증가)
// 궁금한 문서(인덱스 m)가 인쇄될 때 그 카운트 출력
