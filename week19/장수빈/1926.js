// 실버 1. 그림
// https://www.acmicpc.net/problem/1926

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const picture = [];

for (let i = 1; i <= n; i++) {
  const arr = input[i].split(" ").map(Number);
  picture.push(arr);
}

let count = 0;

const visited = Array.from({ length: n }, () => Array(m).fill(false));

const bfs = (x, y) => {
  const queue = [[x, y]];

  visited[x][y] = true;

  let area = 1;

  const direction = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  let head = 0;

  while (head < queue.length) {
    const [curX, curY] = queue[head++];

    for (let i = 0; i < direction.length; i++) {
      const [dx, dy] = direction[i];

      const nextX = curX + dx;
      const nextY = curY + dy;

      if (
        0 <= nextX &&
        nextX < n &&
        0 <= nextY &&
        nextY < m &&
        !visited[nextX][nextY] &&
        picture[nextX][nextY] === 1
      ) {
        area++;
        visited[nextX][nextY] = true;
        queue.push([nextX, nextY]);
      }
    }
  }
  return area;
};

let maxWidth = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (picture[i][j] === 1 && !visited[i][j]) {
      const width = bfs(i, j);
      count++;
      maxWidth = Math.max(maxWidth, width);
    }
  }
}

console.log(count);
console.log(maxWidth);
