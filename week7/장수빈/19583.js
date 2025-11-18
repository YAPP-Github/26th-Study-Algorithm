// 19583. 싸이버개강총회 (실버2)
// https://www.acmicpc.net/problem/19583

// 채팅의 최대 줄 < 100,000
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: 구현
// 내가 작성한 코드의 시간복잡도: O(N)

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// S: 개강총회를 시작한 시간, E: 개강총회를 끝낸 시간, Q: 개강총회 스트리밍을 끝낸 시간
const [S, E, Q] = input[0].split(" ").map((item) => item.split(":"));

// 시간을 모두 분 단위로 변경하기
S[0] = Number(S[0]) * 60 + Number(S[1]);
E[0] = Number(E[0]) * 60 + Number(E[1]);
Q[0] = Number(Q[0]) * 60 + Number(Q[1]);

const checkMember = new Set();
let count = 0;

for (let i = 1; i < input.length; i++) {
  const [time, name] = input[i].split(" ");
  const [hour, minute] = time.split(":");
  const totalMinute = Number(hour) * 60 + Number(minute);

  // S시간 전에 채팅 남긴 사람 모두 Set에 담기
  if (totalMinute <= S[0]) {
    checkMember.add(name);
  }
  // 입장이 확인된 사람만 + E ~ Q 구간 채팅한 사람
  else if (
    checkMember.has(name) &&
    E[0] <= totalMinute &&
    totalMinute <= Q[0]
  ) {
    checkMember.delete(name); // 중복 채팅을 카운트 할 수 있으므로, 이름은 제거
    count++; // 조건을 충족한 사람 count
  }
}

console.log(count);
