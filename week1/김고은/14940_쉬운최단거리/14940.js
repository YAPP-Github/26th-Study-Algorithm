let fs = require("fs")
let filePath = process.platform === "linux"? "/dev/stdin": __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.splice(0,1)[0].split(' ').map(Number);

// 미방문 1 // 방문 0
let visited_arr = Array.from({length: n}, () => new Array(m).fill(-1));
let ans = Array.from({length: n}, () => new Array(m).fill(0));
let need_to_visite = [];
let map = [];
let start_cor = []; // x, y
let moves = [[-1,0], [1,0], [0, -1], [0, 1]];

// 지도 이차원 배열로 변환
for(let i = 0; i < n; i++){
    map.push(input[i].split(" "));
}

// 시작점 잡기 + 불가능 좌표 표시
for(let i = 0; i < n; i++ ){
    for(let j =0; j < m; j++){
        if(map[i][j] === '2') {
            start_cor = [i, j];
            visited_arr[i][j] = 0;
        } 
        else if (map[i][j] === '0') {
            visited_arr[i][j] = 0;
        }
    }
}

need_to_visite.push([...start_cor, 0])

while( need_to_visite.length > 0){
    let [x, y, moved] = need_to_visite.pop();
    ans[x][y] = moved
    for(let move of moves){
        let next_x = x + move[0];
        let next_y = y + move[1];

        if(next_x >= 0 && next_x < n && next_y >= 0 && next_y < m){
            if(visited_arr[next_x][next_y] !== 0) {
                need_to_visite.unshift([next_x, next_y, moved + 1]);   
                visited_arr[next_x][next_y] = 0;
            }
        }
    }
}

for(let i =0; i < n; i ++){
    console.log(ans[i].join(" "));
}