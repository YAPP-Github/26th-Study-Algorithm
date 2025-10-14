const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week3/황유빈/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number).slice(1);

  

class Heap {
  constructor() {
    this.arr = [];
  }
  reHeapUp(index) {
    if (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.arr[index] > this.arr[parentIndex]) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[parentIndex];
        this.arr[parentIndex] = temp;
        this.reHeapUp(parentIndex);
      }
    }
  }
  reHeapDown(index) {
    const left = index * 2 + 1;
    if (left >= this.arr.length) return; 

    const right = left + 1;
    let bigger = left; 
    if (right < this.arr.length && this.arr[right] > this.arr[bigger]) {
      bigger = right; 
    }

    if (this.arr[index] < this.arr[bigger]) {
      [this.arr[index], this.arr[bigger]] = [this.arr[bigger], this.arr[index]];
      this.reHeapDown(bigger);
    }
  }

  insert(value) {
    const index = this.arr.length;
    this.arr[index] = value;
    this.reHeapUp(index);
  }
  remove() {
    if (this.arr.length === 0) {
      return 0;
    }
    if (this.arr.length === 1) {
      return this.arr.pop();
    }
    const root = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.reHeapDown(0);
    return root;
  }
}

const heap = new Heap();
const answer=[]
for (const x of input) {
  if (x === 0) {
    answer.push((heap.remove())); 
  } else {
    heap.insert(x);
  }
}

console.log(answer.join("\n"));

