// 전력망을 둘로 나누기 LV2
// https://school.programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
  // 0. 송전탑의 개수 차이를 담기 위한 배열
  const result = [];

  // 1. 무방향 그래프 생성 (양방향 연결하기)
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  // 2. BFS를 이용하여 탐색하기
  // start = 탐색을 시작할 노드, cutV1 & cutV2 = 끊을 전선의 노드
  const BFS = (start, cutV1, cutV2) => {
    // 2-1. 방문 여부 확인을 위한 visited 배열 생성
    const visited = Array(n + 1).fill(false);
    // 2-2. 탐색할 노드를 큐에 넣어준 후, 미리 방문 처리
    const queue = [start];
    visited[start] = true;

    // 2-3. start 노드와 인접한 노드의 개수를 세기 위한 count 변수 생성
    let count = 0;

    while (queue.length) {
      const node = queue.shift();
      count++;

      // 2-4. 꺼낸 노드와 인접한 노드를 찾기 위한 반복문
      for (const next of graph[node]) {
        // 2-5. 끊으려는 간선의 노드는 탐색하면 X
        if (
          (node === cutV1 && next === cutV2) ||
          (node === cutV2 && next === cutV1)
        )
          continue;

        // 2-6. 끊으려는 간선의 노드가 아니고 + 아직 방문하지 않은 노드면 count
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }

    return count;
  };

  // 3. 모든 전선을 하나씩 끊어보며 송전탑 개수 차이 계산
  for (const [v1, v2] of wires) {
    const count = BFS(v1, v1, v2);
    const count_diff = Math.abs(count - (n - count));
    result.push(count_diff);
  }

  return Math.min(...result);
}
