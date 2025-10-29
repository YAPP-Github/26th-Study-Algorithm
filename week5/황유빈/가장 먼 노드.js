function solution(n, vertex) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of vertex) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const dist = Array(n + 1).fill(-1);
  const queue = [];
  let head = 0;

  dist[1] = 0;
  queue.push(1);

  while (head < queue.length) {
    const current = queue[head++];
    for (const next of graph[current]) {
      if (dist[next] === -1) {
        dist[next] = dist[current] + 1;
        queue.push(next);
      }
    }
  }

  const maxDist = Math.max(...dist);
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (dist[i] === maxDist) count++;
  }

  return count;
}