// 게임 맵 최단거리 LV2
// https://school.programmers.co.kr/learn/courses/30/lessons/1844

// 상대팀 진영에 도착하기 위해 지나가야 하는 최소 칸의 수 = 최단 거리 = BFS
// 입력값 최대 n * m = 100 * 100 = 10^4
// 최대 허용 시간복잡도 = ~ O(N * M) (각 칸을 최대 1번씩만 방문)

function solution(maps) {
  let answer = 0;

  const n = maps.length;
  const m = maps[0].length;

  const queue = [[0, 0]]; // 시작 위치는 항상 (0, 0)
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[0][0] = true;

  // 각 좌표까지의 이동 거리 저장
  const distance = Array.from({ length: n }, () => Array(m).fill(false));
  distance[0][0] = 1;

  // 동, 서, 남, 북 방향 좌표
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let head = 0;

  // BFS로 상대 진영에 도착하기 위한 최단 거리 찾기
  while (head < queue.length) {
    const [x, y] = queue[head++];
    answer++;

    // 4방향으로 움직이면서 지나갈 수 있는 길인지 판단
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]; // 다음번 순서인 x좌표 지나갈 수 있는지 판단
      const ny = y + dy[i]; // 다음번 순서인 y좌표 지나갈 수 있는지 판단

      if (0 <= nx && nx < n && 0 <= ny && ny < m) {
        if (maps[nx][ny] === 1 && !visited[nx][ny]) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
          distance[nx][ny] = distance[x][y] + 1; // 이전에 있던 거리를 한 칸씩 누적
        }
      }
    }
  }

  const result = distance[n - 1][m - 1];

  return result ? result : -1;
}
