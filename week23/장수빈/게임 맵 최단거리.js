// Lv 2. 게임 맵 최단거리
// https://school.programmers.co.kr/learn/courses/30/lessons/1844

// 최단거리 구하기
// 0: 벽이 있어서 갈 수 없는 통로, 1: 벽이 없는 통로

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const dist = Array.from({ length: n }, () => Array(m).fill(0)); // 최단거리

  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const queue = [[0, 0]];
  visited[0][0] = true;
  dist[0][0] += 1;

  let head = 0;

  while (head < queue.length) {
    const [curX, curY] = queue[head++];

    for (const [x, y] of direction) {
      const nextX = curX + x;
      const nextY = curY + y;

      if (
        0 <= nextX &&
        nextX < n &&
        0 <= nextY &&
        nextY < m &&
        !visited[nextX][nextY] &&
        maps[nextX][nextY] === 1
      ) {
        visited[nextX][nextY] = true;
        dist[nextX][nextY] = dist[curX][curY] + 1;
        queue.push([nextX, nextY]);
      }
    }
  }

  return dist[n - 1][m - 1] !== 0 ? dist[n - 1][m - 1] : -1;
}
