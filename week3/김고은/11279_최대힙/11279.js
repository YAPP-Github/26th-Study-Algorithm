
const input = [13,
0,
1,
2,
0,
0,
3,
2,
1,
0,
0,
0,
0,
0];
const [N, ...num_arr] = input;

class MaxHeap {
    constructor () {
        this.heap = []
    }

    length () {
        return this.heap.length
    }

    parent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    leftChild (idx) {
        return idx * 2 + 1;
    }

    rightChild (idx) {
        return idx * 2 + 2;
    }

    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }

    insert (value) {
        this.heap.push(value);
        this.bubbleUp()
    }

    bubbleUp () {
        let idx = this.length() -1;
        let parentIdx = this.parent(idx);

        while(this.heap[parentIdx] && this.heap[idx] > this.heap[parentIdx]){
            this.swap(parentIdx, idx);
            idx = parentIdx;
            parentIdx = this.parent(idx);
        }
    }

    poll () {
        if(this.length() === 0) return 0;
        if(this.length() === 1) {
            return this.heap.pop();
        } 
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }

    bubbleDown () {
        let idx = 0;
        let lefChild = this.leftChild(idx);
        let rightChild = this.rightChild(idx);

        while
            ((this.heap[lefChild] && this.heap[lefChild] > this.heap[idx]) || 
            (this.heap[rightChild] && this.heap[rightChild] > this.heap[idx])){
                let biggerIdx = lefChild;

                if(this.heap[rightChild] && this.heap[rightChild] > this.heap[lefChild] ){
                    biggerIdx = rightChild;
                }
                this.swap(idx, biggerIdx);
                idx = biggerIdx;
                lefChild = this.leftChild(idx);
                rightChild = this.rightChild(idx);
            }
    }
    
}

let heap = new MaxHeap();
let ans = [];

for(let i =0; i < N; i++){
    let num = num_arr[i];

    if(num === 0){
        ans.push(heap.poll());
    } else {
        heap.insert(num)
    }
}

console.log(ans.join("\n"))