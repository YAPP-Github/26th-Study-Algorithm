const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.splice(0,1)[0].split(" ").map(Number);
const [i, j , d] = input.splice(0,1)[0].split(" ").map(Number);
let ans = 0;
let moves = [[-1,0], [0,1], [1,0], [0,-1]]; // 상 우 하 좌 

const room_arr = [];
const need_to_visite = [];

for(let i =0; i < N; i++ ){
    room_arr.push(input[i].split(" "));
}

// 상 -> 좌 -> 하 -> 우 
// 0 -> 3 -> 2 -> 1 
need_to_visite.push([i, j ,d])


while(need_to_visite.length > 0 ){
    let [x, y, direction] = need_to_visite.pop().map(Number);

    if(room_arr[x][y] === '0') {
        ans += 1;
        room_arr[x][y] = '2' // 청소 처리
    }
    // 4칸으로 이동 
    let chance_to_move = 0;
    while(chance_to_move < 4){
        direction = ( direction + 3 ) % 4
        let next_x = x + moves[direction][0];
        let next_y = y + moves[direction][1];

        if(next_x >= 0 && next_x < N && next_y >= 0 && next_y < M ){
            if(room_arr[next_x][next_y] === '0' ){
                need_to_visite.push([next_x, next_y, direction])
                break;
            }
        }

        chance_to_move += 1;
    }

    let back_d = ( direction + 2 ) % 4;
    let back_x = x + moves[back_d][0];
    let back_y = y + moves[back_d][1];

    // 이동 못하고 후진하는 경우
    if (chance_to_move === 4 && back_x >= 0 && back_x < N && back_y >= 0 && back_y < M && room_arr[back_x][back_y] !== '1') {
        need_to_visite.push([back_x, back_y, direction]);
    }
}

console.log(ans)