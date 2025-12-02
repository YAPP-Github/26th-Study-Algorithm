// map - 25m
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin': __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i =1; i <= Number(input[0]); i++){
    let ans = 1;
    let map = new Map();
    let num = Number(input[1]);
    let arr = input.splice(1, num+1)

    for(let j = 1; j <= num; j++){
        let [item, category] = arr[j].split(' ')

        if(map.has(category)){
            let prev = map.get(category);
            map.set(category, [...prev , item ])
        } else {
            map.set(category, [item])
        }
    }
    
    for( let [,items] of map ){
        ans *= items.length + 1
    }
    
    console.log(ans - 1);
}