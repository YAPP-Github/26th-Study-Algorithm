let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let N = input[0];
let numbers = input.slice(1);

let sorted = numbers.sort((a, b) => a - b);

class Calculator {
    constructor (arr) {
        this.arr = arr
    }

    length () {
        return this.arr.length;
    }

    avg () {
        let sum_arr = this.arr.reduce((acc, val) => acc + val, 0);
        let avg = Math.round(sum_arr / this.length());
        return  avg === -0? 0: avg;
    }

    median () {
        return this.arr[Math.floor(this.length() / 2)];
    }

    range () {
        return this.arr[this.length() -1 ] -this.arr[0]; 
    }

    mode() {
        let freq = new Map();

        for (let i of this.arr) {
            freq.set(i, (freq.get(i) || 0) + 1);
        }

        let max_freq = Math.max(...freq.values());

        let modes = [];
        for (let [num, count] of freq.entries()) {
            if (count === max_freq) {
                modes.push(num);
            }
        }

        modes.sort((a, b) => a - b);

        return modes.length > 1 ? modes[1] : modes[0];
    }
};

let rate = new Calculator(sorted);

console.log(rate.avg());
console.log(rate.median());
console.log(rate.mode())
console.log(rate.range());
