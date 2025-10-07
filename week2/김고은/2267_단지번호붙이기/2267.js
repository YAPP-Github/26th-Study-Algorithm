const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.splice(0,1)[0];
let map_arr = [];
let group_count_arr = [];
let visited_arr = Array.from({length: N}, () => Array.from({length:N}).fill(1));
let need_to_visited = [];
let moves = [[-1,0], [1,0], [0, -1], [0,1]];

for(let i = 0; i < N; i++){
    map_arr.push(input[i].split(""));
};

// 탐색 시작점 찾기 
for(let i =0; i < N; i++){
    for(let j =0; j < N; j++){
        if(map_arr[i][j] == 1 && visited_arr[i][j] == 1){
            need_to_visited.push([i,j]);
            visited_arr[i][j] = 0;
            dfs();
        } else continue;
    }
}


function dfs () {
    let group_count = 0;
    while(need_to_visited.length > 0){
        let [x, y] = need_to_visited.pop();
        group_count += 1

        for(let move of moves) {
            let next_x = x + move[0];
            let next_y = y + move[1];

            if(next_x >=0 && next_x < N && next_y >= 0 && next_y < N){
                if(visited_arr[next_x][next_y] == 1 && map_arr[next_x][next_y] == 1 ){
                    // 방문 예정 좌표 -> 방문 표시를 통한 중복 방문 방지
                    visited_arr[next_x][next_y] = 0;
                    need_to_visited.push([next_x, next_y]);
                }
            }
        }
    }

    group_count_arr.push(group_count);
}

group_count_arr.sort((a,b)=> a-b);

console.log(group_count_arr.length);
console.log(group_count_arr.join("\n"))