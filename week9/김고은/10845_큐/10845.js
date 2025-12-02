
//큐 - 객체 지향 / 10m
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

class Queue {
    constructor () {
        this.arr = [];
    }

    push (value) {
        this.arr.push(value);
    }

    pop () {
        if(this.arr.length === 0) return -1;
        return this.arr.shift();
    }

    size () {
        return this.arr.length;
    }

    empty () {
        return this.arr.length === 0 ? 1 : 0;
    }

    front () {
        return this.arr.length > 0? this.arr[0] : -1; 
    }

    back () {
        let last_idx = this.size() - 1;
        return last_idx >=0? this.arr[last_idx]: -1;
    }
}

let queue = new Queue();
let ans = [];

for(let i =1; i <= Number(input[0]); i++){
    let line = input[i].split(' ');
    
    if(line[0] === 'push'){
        queue.push(Number(line[1]))
    }
    else {
        let cmd = line[0];
        console.log(queue[cmd]())
    }
}



