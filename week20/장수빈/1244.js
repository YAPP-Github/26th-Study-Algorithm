// 실버 4. 스위치 켜고 끄기
// https://www.acmicpc.net/problem/1244

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const switchStatus = input[1].split(" ").map(Number);
const studentCnt = Number(input[2]);

for (let i = 3; i < 3 + studentCnt; i++) {
  const [gender, x] = input[i].split(" ").map(Number);

  // 1. 남학생일 경우
  if (gender === 1) {
    for (let i = 0; i < N; i++) {
      if ((i + 1) % x === 0) {
        if (switchStatus[i] === 0) switchStatus[i] = 1;
        else switchStatus[i] = 0;
      }
    }
  }
  // 2. 여학생일 경우
  else {
    if (switchStatus[x - 1] === 0) switchStatus[x - 1] = 1;
    else switchStatus[x - 1] = 0;

    for (let i = 1; i < N / 2; i++) {
      if (switchStatus[x - 1 - i] === switchStatus[x - 1 + i]) {
        if (switchStatus[x - 1 - i] === 0) {
          switchStatus[x - 1 - i] = 1;
          switchStatus[x - 1 + i] = 1;
        } else {
          switchStatus[x - 1 - i] = 0;
          switchStatus[x - 1 + i] = 0;
        }
      } else {
        break;
      }
    }
  }
}

for (let i = 0; i < switchStatus.length; i += 20) {
  console.log(switchStatus.slice(i, i + 20).join(" "));
}
