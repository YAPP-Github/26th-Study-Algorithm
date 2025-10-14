const fs = require("fs");

const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
const [N, ...num_arr] = input;


class AbsoluteValueHeap {
    constructor () {
        this.heap = [];
    }

    length (){
        return this.heap.length;
    }

    getLeftChild (idx) {
        return idx * 2 + 1;
    }

    getRightChild (idx) {
        return idx * 2 + 2;
    }

    getParent (idx) {
        return Math.floor((idx - 1) / 2);
    }

    swap (idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }

    insert (value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.length() - 1;
        let parentIdx = this.getParent(idx);

        while (
                Math.abs(this.heap[idx]) < Math.abs(this.heap[parentIdx]) ||
                (Math.abs(this.heap[idx]) === Math.abs(this.heap[parentIdx]) && this.heap[idx] < this.heap[parentIdx]))
            {
                this.swap(idx, parentIdx);
                idx = parentIdx;
                parentIdx = this.getParent(idx)
            } 
        }

    poll () {
        if(this.length() === 0) return 0;
        if(this.length() === 1) return this.heap.pop();
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }

    bubbleDown() {
        let idx = 0;

        while (true) {
            const left = this.getLeftChild(idx);
            const right = this.getRightChild(idx);
            let smallest = idx;

            // left child
            if (
                this.heap[left] &&
                (Math.abs(this.heap[left]) < Math.abs(this.heap[smallest]) ||
                    (Math.abs(this.heap[left]) === Math.abs(this.heap[smallest]) && this.heap[left] < this.heap[smallest]))
            ) {
                smallest = left;
            }

            // right child
            if (
                this.heap[right] &&
                (Math.abs(this.heap[right]) < Math.abs(this.heap[smallest]) ||
                    (Math.abs(this.heap[right]) === Math.abs(this.heap[smallest]) && this.heap[right] < this.heap[smallest]))
            ) {
                smallest = right;
            }

            if (smallest === idx) break;
            this.swap(idx, smallest);
            idx = smallest;
        }
    }

}

let ans = [];
let heap = new AbsoluteValueHeap();

for(let i =0; i < N; i++){
    let num = num_arr[i];

    if(num === 0){
        ans.push(heap.poll());
    } else {
        heap.insert(num)
    }
}

console.log(ans.join("\n"))