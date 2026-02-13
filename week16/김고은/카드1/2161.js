// queue
// 8m
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const N = Number(fs.readFileSync(filePath).toString().trim());

let cards = [];
let ans = []
let idx = 1;

for(let i =1; i <= N; i++){
    cards.push(i);
}

while(cards.length > 0){
    if(cards.length === 1) ans.push(cards.shift())
    
    else if(idx % 2 === 1 ){ 
        ans.push(cards.shift())
    }

    else {
        let front_card = cards.shift();
        cards.push(front_card)
    }
    idx++;
}

console.log(ans.join(' '))