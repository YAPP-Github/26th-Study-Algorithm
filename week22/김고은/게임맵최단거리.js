function solution(maps) {
    let moves = [
        [1,0],
        [-1,0],
        [0, -1],
        [0, 1]
    ];
    let needToVisite  = [];
    let n = maps.length;
    let m = maps[0].length;
    let idx =0;
    let ans = -1;
    
    needToVisite.push([0,0,1]);
    
    // bfs 
    while(needToVisite.length > idx){
        let [x,y,count] = needToVisite[idx++];
        
        if(x === n-1 && y === m-1 && count > ans) ans = count;
        for(move of moves){
            let next_x = x + move[0];
            let next_y = y + move[1];
            
            if(next_x >=0 && next_x < n && next_y >=0 && next_y < m ){
                if(maps[next_x][next_y] === 1){
                    needToVisite.push([next_x, next_y, count+1]);
                    maps[next_x][next_y] = 0;
                }
            }
        }
    }
    
    return ans;
    
}