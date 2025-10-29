class MinHeap {
  constructor() {
    this.arr = [];
  }

  push(value) {
    this.arr.push(value);
    this._heapUp(this.arr.length - 1);
  }

  pop() {
    if (this.arr.length === 0) return null;
    if (this.arr.length === 1) return this.arr.pop();

    const min = this.arr[0];
    this.arr[0] = this.arr.pop();
    this._heapDown(0);
    return min;
  }

  peek() {
    return this.arr.length === 0 ? null : this.arr[0];
  }

  size() {
    return this.arr.length;
  }

  _heapUp(idx) {
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.arr[parent] <= this.arr[idx]) break;
      [this.arr[parent], this.arr[idx]] = [this.arr[idx], this.arr[parent]];
      idx = parent;
    }
  }

  _heapDown(idx) {
    const length = this.arr.length;
    while (true) {
      const left = idx * 2 + 1;
      const right = idx * 2 + 2;
      let smallest = idx;

      if (left < length && this.arr[left] < this.arr[smallest]) {
        smallest = left;
      }
      if (right < length && this.arr[right] < this.arr[smallest]) {
        smallest = right;
      }
      if (smallest === idx) break;

      [this.arr[smallest], this.arr[idx]] = [this.arr[idx], this.arr[smallest]];
      idx = smallest;
    }
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();

  for (const s of scoville) {
    heap.push(s);
  }

  let mixCount = 0;

  while (heap.peek() !== null && heap.peek() < K) {
    if (heap.size() < 2) {
      return -1;
    }

    const first = heap.pop();
    const second = heap.pop();

    const mixed = first + second * 2;
    heap.push(mixed);
    mixCount++;
  }

  return mixCount;
}
