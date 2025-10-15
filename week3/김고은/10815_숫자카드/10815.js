const fs = require("fs");

const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// N M 이 꽤큼 완전탐색은 안될거 같고 이분탐색해보면 좋을 것 같음 
// 둘중 하나를 일단 정렬 돌려서 놓고, 하나 순회하면서 있없 여부를 배열에 기록

const [N, arr1, M, arr2] = input;
let ans = [];

let sanggun_arr = arr1.split(" ").map(Number);
let compare_arr = arr2.split(" ").map(Number);

sanggun_arr.sort((a,b) => a - b);

compare_arr.map((e) => {
    let start = 0;
    let end = sanggun_arr.length -1;
    let existed = 0; // 0 없음 

    while(start >= 0 && start <=  end){
        let mid = Math.floor((start + end) / 2);

        if(sanggun_arr[mid] > e){
            end = mid -1;
        } else if ( e > sanggun_arr[mid]){
            start = mid + 1; 
        } else {
            existed = 1; // 있음
            break;
        }
    }
    ans.push(existed)
})

console.log(ans.join(" "))