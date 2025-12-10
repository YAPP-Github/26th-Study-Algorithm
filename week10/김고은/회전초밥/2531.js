const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin': __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 접시수 / 초밥variant / 연속 / 쿠폰 
const [N, d, k, c] = input.shift().split(' ').map(Number);

// 슬라이딩 윈도우로 가되, left 가 배열 전체를 돌 수 있도록 
// 중복 지양 (겹칠수는 있음) => map 
// 할인 초밥 고려 

let ans = 0; // 가짓수 
let count = new Map(); // 초밥 종류별 갯수 count 

// 초기값 세팅 
for(let i =0; i < k; i++){
    let sushi = input[i];
    count.set(sushi, (count.get(sushi) || 0) + 1 )

    if(!count.get(c.toString()) || count.get(c.toString) === 0) ans = count.size + 1;
    else ans = count.size;
}

for(let idx =0; idx < N; idx++){
    // k 범위 하드코딩 하지 않도록 주의 (테케에 너무 의존하지 말기)
    let formatted_idx = ((idx + k) % N);
    let polled_sushi = input[idx];
    let added_sushi = input[formatted_idx];

    count.set(added_sushi, (count.get(added_sushi) || 0) + 1 )
    count.set(polled_sushi, (count.get(polled_sushi) - 1));

    if(count.get(polled_sushi) === 0) count.delete(polled_sushi);
    let variant = count.size;

    if(!count.get(c.toString()) || count.get(c.toString) === 0) variant +=1;
    ans = Math.max(variant, ans)
}

console.log(ans)