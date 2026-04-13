const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let idx = 0;
const N = input[idx++];
const M = input[idx++];

const boxes = input.slice(idx, idx + N);
idx += N;

const wants = input.slice(idx, idx + M);

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return max;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.heap[parent] >= this.heap[index]) break;

      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let largest = index;

      if (left < length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      index = largest;
    }
  }
}

const maxHeap = new MaxHeap();

for (const box of boxes) {
  maxHeap.push(box);
}

for (const want of wants) {
  const currentMax = maxHeap.pop();

  if (currentMax < want) {
    console.log(0);
    process.exit(0);
  }

  maxHeap.push(currentMax - want);
}

console.log(1);