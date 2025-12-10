const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
let stick = Array.from({length: N})

stick = input[1].split(' ').map(Number);

// 언제 앞에서 빼고, 언제 뒤에서 뺄까
// (과일 max 초과 _2)-> left idx++, (과일 max 미초과)-> righ idx++
// 앞뒤로 움직여야 하는데, 길이도 안 고정 -> 투 포인터 

let fruit_variant_num = 2;// 종류 
let ans = 0;
let left = 0;
const count = new Map();


for(let right = 0; right < N; right++){
    // stick.slice(left, right+left).includes()-> 투포인터 의미 없어짐
    let rightfruit = stick[right];
    count.set(rightfruit, (count.get(rightfruit) || 0) +1);

    // 과일 빼야함
    while(count.size > 2){
        let leftfruit = stick[left];
        count.set(leftfruit, count.get(leftfruit) -1);

        if(count.get(leftfruit) === 0) count.delete(leftfruit);

        left++;
    }
    ans = Math.max(ans, right - left +1)
}

console.log(ans)