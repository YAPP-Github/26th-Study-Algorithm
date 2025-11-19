// 1325. 효율적인 해킹 (실버1)
// https://www.acmicpc.net/problem/1325

// N <= 10,000(10^4), M <= 100,000(10^5)
// -> 최대 허용 시간복잡도: O(N^2), 알고리즘: BFS (단방향 그래프)
// 내가 작성한 코드의 시간복잡도: O(N^2)

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// n: 노드의 수, m: m개의 신뢰 관계의 줄 수 (간선의 수)
const [n, m] = input[0].split(" ").map(Number);

// 인접 그래프 생성
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i < m + 1; i++) {
  // a가 b를 신뢰하면 b가 a를 해킹할 수 있으므로, b -> a인 단방향 그래프 생성
  const [a, b] = input[i].split(" ").map(Number);
  graph[b].push(a);
}

// 인접한 노드의 수를 저장할 배열
const nodeCount = Array(n + 1).fill(0);

// 노드를 돌면서 인접 노드의 개수를 nodeCount 배열에 저장
const bfs = (node) => {
  const queue = [node];
  const visited = Array(n + 1).fill(false);
  visited[node] = true;

  let head = 0;

  while (head < queue.length) {
    const nextNode = queue[head++];

    // 시간 초과 났음
    // 원인: for...of 문
    // JS 엔진이 내부에서 iterator 객체를 만들고, next()를 호출하면서 값을 하나씩 꺼내오는 구조라 오버헤드가 조금 더 있음
    // for (const item of graph[nextNode]) {
    //   if (!visited[item]) {
    //     visited[item] = true;
    //     queue.push(item);
    //     nodeCount[node]++;
    //   }
    // }

    // 그냥 배열 메모리에서 인덱스로 바로 꺼냄
    for (let i = 0; i < graph[nextNode].length; i++) {
      const next = graph[nextNode][i];
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
        nodeCount[node]++;
      }
    }
  }
};

for (let i = 1; i < graph.length; i++) {
  bfs(i);
}

const maxCount = Math.max(...nodeCount);
let results = [];

for (let i = 0; i < nodeCount.length; i++) {
  if (nodeCount[i] === maxCount) {
    results.push(i);
  }
}

console.log(results.join(" "));
