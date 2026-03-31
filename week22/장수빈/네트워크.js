// Lv3. 네트워크
// https://programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  let count = 0;
  let visited = Array(computers.length).fill(false);

  const bfs = (start) => {
    let queue = [start];
    visited[start] = true;

    let head = 0;

    while (head < queue.length) {
      const curNode = queue[head++];

      for (let nextNode = 0; nextNode < n; nextNode++) {
        if (!visited[nextNode] && computers[curNode][nextNode] === 1) {
          queue.push(nextNode);
          visited[nextNode] = true;
        }
      }
    }
  };

  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      bfs(i);
      count++;
    }
  }
  return count;
}
