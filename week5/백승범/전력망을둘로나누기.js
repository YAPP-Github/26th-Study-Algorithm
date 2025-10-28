function solution(n, wires) {
    
  const g = Array.from({ length: n + 1 }, () => []);
    
  const bfs = (s, banA, banB) => {
    const queue = [s];
    const visited = Array({lenght: n+1 }).fill(false); 
    visited[s] = true;
    let count = 1;

    while (queue.length) {
      const x = queue.shift();
        
      for (let i = 0; i < g[x].length; i++) {
        const y = g[x][i];
        if ((x === banA && y === banB) || (x === banB && y === banA)) {
          continue;
        }
        if (!visited[y]) {
          visited[y] = true;
          count++;
          queue.push(y);
        }
      }
    }
      
    return count;
  };
    
  for (let i = 0; i < wires.length; i++) {
    const a = wires[i][0];
    const b = wires[i][1];
    g[a].push(b);
    g[b].push(a);
  }

  let answer = n;
    
  for (let i = 0; i < wires.length; i++) {
    const a = wires[i][0];
    const b = wires[i][1];
    const c1 = bfs(a, a, b);
    const c2 = n - c1;
    const diff = Math.abs(c1 - c2);
      
    if (diff < answer) {
      answer = diff;
    }
  }
    
  return answer;
}