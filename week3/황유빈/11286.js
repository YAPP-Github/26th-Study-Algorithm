const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week3/황유빈/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(1);

// 절댓값 힙은 다음과 같은 연산을 지원하는 자료구조이다.

// 배열에 정수 x (x ≠ 0)를 넣는다.
// 배열에서 절댓값이 가장 작은 값을 출력하고, 그 값을 배열에서 제거한다.
// 절댓값이 가장 작은 값이 여러개일 때는, 가장 작은 수를 출력하고, 그 값을 배열에서 제거한다.
// 프로그램은 처음에 비어있는 배열에서 시작하게 된다.

class Heap {
  constructor() {
    this.arr = [];
  }

  compareValues(x, y) {
    const absoluteX = Math.abs(x);
    const absoluteY = Math.abs(y);
    if (absoluteX < absoluteY) return -1;
    if (absoluteX > absoluteY) return 1;
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  }
  reHeapUp(index) {
    if (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compareValues(this.arr[index], this.arr[parentIndex]) < 0) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[parentIndex];
        this.arr[parentIndex] = temp;
        this.reHeapUp(parentIndex);
      }
    }
  }
  reHeapDown(index) {
    const leftIndex = index * 2 + 1;
    if (leftIndex >= this.arr.length) return;

    const rightIndex = leftIndex + 1;
    let smaller = leftIndex;
    if (
      rightIndex < this.arr.length &&
      this.compareValues(this.arr[rightIndex], this.arr[leftIndex]) < 0
    ) {
      smaller = rightIndex;
    }
    if (this.compareValues(this.arr[index], this.arr[smaller]) > 0) {
      const temp = this.arr[index];
      this.arr[index] = this.arr[smaller];
      this.arr[smaller] = temp;
      this.reHeapDown(smaller);
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
const answer = [];
for (const x of input) {
  if (x === 0) {
    answer.push(heap.remove());
  } else {
    heap.insert(x);
  }
}

console.log(answer.join("\n"));

// heap.insert(1)
// heap.insert(-1)
// heap.insert(0)
// heap.insert(0)
// heap.insert(0)
// heap.insert(1)
// heap.insert(1)
// heap.insert(-1)
// heap.insert(2)
// heap.insert(-2)
// heap.insert(0)
// heap.insert(0)
// heap.insert(0)
// heap.insert(0)
// heap.insert(0)
// heap.insert(0)
// heap.insert(0)
// console.log(heap.arr)
