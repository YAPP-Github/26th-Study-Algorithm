const fs = require('fs')
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 40m
// BFS/DFS용 큐(배열)는 함수 내부에서 새로 만들어야 함
// 여러 번 탐색할 때 전역으로 두면 이전 탐색 결과가 남을 수 있음 (idx로 순회할때)
// 방문 처리는 큐에서 꺼낼 때가 아니라, 큐에 넣는 순간 해야 중복 방문을 막을 수 있음
let moves = [
    [-1,0], 
    [0,1],
    [1,0],
    [0,-1]
]
const [n,m] = input.shift().split(' ').map(Number);
let canvas = [];
let paint_count = 0;
let max_size = 0;


input.forEach((l) => {
    canvas.push(l.split(' ').map(Number));
})

for(let i = 0; i < n; i++){
    for(let j =0; j < m; j++){
        if(canvas[i][j] === 0) continue;
        else if(canvas[i][j] === 1){
            let temp = dfs(i,j);
            if(temp > max_size) max_size = temp;
            paint_count++;
        }
    }
}

function dfs (i,j) {
    let needToVisite = [];
    let count = 1;
    needToVisite.push([i,j]);   
    let idx = 0;  
    canvas[i][j] = 0;

    while(needToVisite.length > idx){
        let [x,y] = needToVisite[idx++];

        for (move of moves) { 
            let n_x = x + move[0];
            let n_y = y + move[1];

            if(n_x >= 0 && n_x < n && n_y >=0 && n_y < m){
                if(canvas[n_x][n_y] === 1){
                    canvas[n_x][n_y] = 0;
                    needToVisite.push([n_x, n_y]);
                    count+=1;
                }
            }
        }
    }
    return count;
}

console.log(paint_count)
console.log(max_size)