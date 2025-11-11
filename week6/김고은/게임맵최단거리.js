function solution(maps) {
    let n = maps.length;
    let m = maps[0].length;
    let needToVisite = [];
    let moves = [[0,-1], [0,1], [-1,0], [1,0]];
    let idx = 0; 
    
    needToVisite.push([0,0,1]); // 출발좌표, 이동횟수
    
    while(needToVisite.length > idx){
        let [x,y,c] =  needToVisite[idx++]
        maps[x][y] = 0;
        if(x == n-1 && y == m-1) {
            return c;
        }
        
        for(let move of moves){
            let next_x = x + move[0];
            let next_y = y + move[1];
            
            if(next_x >=0 && next_y >=0 && next_x < n && next_y < m){
                if(maps[next_x][next_y] == 1){
                    needToVisite.push([next_x, next_y, c+1]);
                    maps[next_x][next_y] = 0;
                }
            }
        }
        
    }
    return -1;
}