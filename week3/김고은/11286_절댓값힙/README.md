
[# 문제링크](https://www.acmicpc.net/problem/11286)

## 접근 방향 설명
> [조건1] 절대값이 작은순서로 정렬되는 이진트리 형태
> [조건2] 절대값이 같다면, 음수 first  


## 풀이 과정에서 새롭게 느낀점(배운점)

- while 문 조건이 2개 이상 넘어가면 무조건 나눠서 가자!!! 한번에 많은 조건을 걸면 분명 실수가 나오고, 예외조건이 생긴다 ..! 

---

## 풀이 코드

```js
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
```

---

## 문제
절댓값 힙은 다음과 같은 연산을 지원하는 자료구조이다.

배열에 정수 x (x ≠ 0)를 넣는다.
배열에서 절댓값이 가장 작은 값을 출력하고, 그 값을 배열에서 제거한다. 절댓값이 가장 작은 값이 여러개일 때는, 가장 작은 수를 출력하고, 그 값을 배열에서 제거한다.
프로그램은 처음에 비어있는 배열에서 시작하게 된다.

## 입력
첫째 줄에 연산의 개수 N(1≤N≤100,000)이 주어진다. 다음 N개의 줄에는 연산에 대한 정보를 나타내는 정수 x가 주어진다. 만약 x가 0이 아니라면 배열에 x라는 값을 넣는(추가하는) 연산이고, x가 0이라면 배열에서 절댓값이 가장 작은 값을 출력하고 그 값을 배열에서 제거하는 경우이다. 입력되는 정수는 -231보다 크고, 231보다 작다.

## 출력
입력에서 0이 주어진 회수만큼 답을 출력한다. 만약 배열이 비어 있는 경우인데 절댓값이 가장 작은 값을 출력하라고 한 경우에는 0을 출력하면 된다.