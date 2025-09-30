let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N,M] = input.splice(0,1)[0].split(" ").map(Number);

let min_count = [];
let chess_arr = [];

// 체스판 이중배열로 재편성
for(let i = 0; i < N; i++ ){
    chess_arr.push(input[i].split(""));
}

// 체스판 자르기 
for(let i = 0; i <= N-8; i++){
    for(let j = 0; j <= M-8; j++){
        let W_init = count_change_to_paint(i, j, 'W');
        let B_init = count_change_to_paint(i, j, 'B');

        let new_min = Math.min(W_init, B_init)

        if(min_count.length > 0){
            let min = min_count.pop();
            min_count.push(min > new_min? new_min: min);
        } else {
            min_count.push(new_min)
        }
    }
}

// W / B 검증하여 다시 색상을 칠할 count를 계산하는 function 
function count_change_to_paint (x , y , init_color) {
    let count = 0;
    let compare_color = init_color === 'W'? 'B': 'W';

    for(let next_x = x; next_x < x + 8; next_x++){
        for(let next_y = y; next_y < y + 8; next_y++){
            if((next_x + next_y) % 2 === 0){
                if(input[next_x][next_y] === init_color) count += 1;
            }
            else if((next_x + next_y) % 2 === 1){
                if(input[next_x][next_y] === compare_color) count += 1;
            }
        }
    }

    return count;
}


console.log(...min_count)