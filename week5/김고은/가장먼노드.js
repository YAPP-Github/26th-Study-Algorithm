function solution (n, edge) {
    let far = Array.from({length: n+1}).fill(0);
    let need_to_visite = [];
    let visited = Array.from({length: n+1}).fill(false)
    let graph =  Array.from({length: n+1}, () => [])
    
    edge.forEach((e) => {
        const [vertex1, vertex2] = e;
        graph[vertex1] = [...graph[vertex1], vertex2 ];
        graph[vertex2] = [...graph[vertex2], vertex1 ];
    })
    
    // 탐색 시작점 초기화 
    visited[1] = true;
    graph[1].forEach((e) => {
        need_to_visite.push([e,0]);
        visited[e] = true;
    })
    
    // 최단거리를 보장해야 함으로 bfs 탐색
    // 반례: 6 / [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2], [4, 5], [4, 6]]
    while(need_to_visite.length > 0) {
        const [vertex, how_far] = need_to_visite.shift();
        far[vertex] = how_far + 1;
        
        for(next_vertex of graph[vertex]) {
            if(visited[next_vertex]) continue;
            need_to_visite.push([next_vertex, how_far + 1])
            visited[next_vertex] = true;
        }
    }
    
    let max_far = Math.max(...far)
    
    console.log(far)
    far = far.filter((e) => e == max_far)
    return far.length;
}