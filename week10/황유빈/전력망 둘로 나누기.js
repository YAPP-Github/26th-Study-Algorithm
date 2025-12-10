function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;

  const tree = Array.from({ length: n + 1 }, () => []);
  for (const [v1, v2] of wires) {
    tree[v1].push(v2);
    tree[v2].push(v1);
  }

  function countNodes(start, disconnectedNode) {
    let count = 0;
    const queue = [start];
    const visited = Array(n + 1).fill(false);
    visited[start] = true;

    while (queue.length > 0) {
      const node = queue.shift();
      count++;

      for (const neighbor of tree[node]) {
        if (neighbor !== disconnectedNode && !visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
    return count;
  }

  for (const [v1, v2] of wires) {
    const count1 = countNodes(v1, v2);
    const count2 = n - count1;

    const diff = Math.abs(count1 - count2);

    if (diff < answer) {
      answer = diff;
    }
  }

  return answer;
}
