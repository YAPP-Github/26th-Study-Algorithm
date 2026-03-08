// 실버 1. 나이트의 이동
// https://www.acmicpc.net/problem/7562

// 4 <= L <= 300
// -> 최대 허용 시간복잡도: O(N^2), 알고리즘: BFS
// 작성한 코드의 시간복잡도: O(L^2)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const T = Number(input[idx++]);

// 나이트가 현재 위치에서 움직일 수 있는 좌표
const position = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

for (let t = 0; t < T; t++) {
  const l = Number(input[idx++]);

  const [startX, startY] = input[idx++].split(" ").map(Number);
  const [endX, endY] = input[idx++].split(" ").map(Number);

  // 시작부터 시작점과 목적지 좌표가 같을 경우
  if (startX === endX && startY === endY) {
    console.log(0);
    continue;
  }

  const queue = [[startX, startY]];
  const visited = Array.from({ length: l }, () => Array(l).fill(false));
  const dist = Array.from({ length: l }, () => Array(l).fill(0));

  visited[startX][startY] = true;

  let head = 0;
  while (head < queue.length) {
    const [curX, curY] = queue[head++];

    // 나이트가 움직일 수 있는 좌표
    for (let i = 0; i < position.length; i++) {
      const [x, y] = position[i];
      const nextX = curX + x;
      const nextY = curY + y;

      if (
        nextX >= 0 &&
        nextX < l &&
        nextY >= 0 &&
        nextY < l &&
        !visited[nextX][nextY]
      ) {
        visited[nextX][nextY] = true;
        dist[nextX][nextY] = dist[curX][curY] + 1;

        if (nextX === endX && nextY === endY) {
          console.log(dist[nextX][nextY]);
          break;
        }

        queue.push([nextX, nextY]);
      }
    }
  }
}
