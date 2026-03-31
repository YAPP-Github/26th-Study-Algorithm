// 실버 2. 랭킹전 대기열
// https://www.acmicpc.net/problem/20006

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// p: 플레이어 수, m: 방 정원
const [p, m] = input[0].split(" ").map(Number);

// [
//   {
//     baseLevel: 10,
//     players : []
// ]
let match = [];

for (let i = 1; i <= p; i++) {
  const [levelStr, name] = input[i].split(" ");
  const level = Number(levelStr);

  let isMatch = false;

  // 매칭 가능한 방이 있을 경우
  for (const room of match) {
    if (
      room.players.length < m &&
      room.baseLevel - 10 <= level &&
      level <= room.baseLevel + 10
    ) {
      room.players.push([level, name]);
      isMatch = true;
      break;
    }
  }

  // 매칭 가능한 방이 없을 경우
  if (!isMatch) {
    match.push({
      baseLevel: level,
      players: [[level, name]],
    });
  }
}

for (const [_, value] of Object.entries(match)) {
  // 닉네임 사전순 정렬
  value.players.sort((a, b) => a[1].localeCompare(b[1]));

  if (value.players.length === m) {
    console.log("Started!");
    for (let i = 0; i < value.players.length; i++) {
      console.log(value.players[i].join(" "));
    }
  } else {
    console.log("Waiting!");
    for (let i = 0; i < value.players.length; i++) {
      console.log(value.players[i].join(" "));
    }
  }
}
