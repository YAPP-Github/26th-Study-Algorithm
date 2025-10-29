function solution(n, wires) {
    let diff_arr = [];
    
    // 순회하면서 하나씩 선 끊기 
    for(let i =0; i < wires.length; i++){
        let copy_of_wire = [...wires]
        let start_a = wires[i][0];
        let start_b = wires[i][1];
        copy_of_wire.splice(i, 1);
        let spliced_wire =  cutWire(copy_of_wire, n);
        
        let count_vertex_start_a = dfs(spliced_wire, start_a, n); 
        let count_vertex_start_b = dfs(spliced_wire, start_b, n); 
        let diff = Math.abs(count_vertex_start_a - count_vertex_start_b);
        console.log(count_vertex_start_a, count_vertex_start_b)
        diff_arr.push(diff)
    }
   
    return Math.min(...diff_arr)
}

function cutWire (wires, n) {
   let graph = Array.from({length: n +1}, () => []); 
    
    for(let i =0; i < wires.length; i ++){
        const [vertex1, vertex2] = wires[i];
        graph[vertex1] = [...graph[vertex1], vertex2 ];
        graph[vertex2] = [...graph[vertex2], vertex1 ];
    }
    
    return graph;
    
}

function dfs (spliced_wire, start, n) { 
    let count = 0;
    let needTovisite = []; 
    let visited = Array.from({length: n+1}).fill(false);
    
    // 초기 탐색 설정 
    needTovisite.push(start);
    visited[start] = true;
    
    // bfs 탐색 
    while(needTovisite.length > 0 ) {
        let  vertex  = needTovisite.shift();
        visited[vertex] = true;
        count++;
        
        for(next_vertex of spliced_wire[vertex] ) {
            if(visited[next_vertex]) continue;
            needTovisite.unshift(next_vertex);
            visited[next_vertex] = true;
        }
        
    }
    return count;
}