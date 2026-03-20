// 실버 2. 랭킹전 대기열
// https://www.acmicpc.net/problem/20006

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [p, m] = input[0].split(" ").map(Number);

// 객체 형태를 저장할 배열 생성
// { baseLevel: , players: []}
const rooms = [];

for (let i = 1; i <= p; i++) {
  const [levelStr, name] = input[i].split(" ");
  const level = Number(levelStr);

  let isJoined = false;

  // 1. 입장 가능한 방이 있을 경우
  for (const room of rooms) {
    if (
      room.players.length < m &&
      room.baseLevel - 10 <= level &&
      level <= room.baseLevel + 10
    ) {
      room.players.push([level, name]);
      isJoined = true;
      break;
    }
  }

  // 2. 입장 가능한 방이 없어 새로운 방을 만들어야 할 경우
  if (!isJoined) {
    rooms.push({
      baseLevel: level,
      players: [[level, name]],
    });
  }
}

for (const room of rooms) {
  room.players.sort((a, b) => a[1].localeCompare(b[1]));

  if (room.players.length === m) {
    console.log("Started!");
    for (const [level, name] of room.players) {
      console.log(level, name);
    }
  } else {
    console.log("Waiting!");
    for (const [level, name] of room.players) {
      console.log(level, name);
    }
  }
}
