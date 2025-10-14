
[# 문제링크](https://www.acmicpc.net/problem/11279)

## 접근 방향 설명
> 제목처럼 Max으로 풀어내면 해결!
[max_heap 돌아가는 과정](https://staying.fun/en/features/algorithm-visualize?code=ae9b726bda5c171267fa4bd74fe89fbaba539e059ee0cb0b1378c17b1bc63092)

## 풀이 과정에서 새롭게 느낀점(배운점)

- 오랜만에 heap 을 풀었더니 이전보다 조금 시간이 걸렸다 class로 heap 구조 만들어줘야 하기에 이제라두 다시 익숙해져서 빠르게 풀어내자!

---

## 풀이 코드

```js
const fs = require("fs");

const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
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
```

---

## 문제
널리 잘 알려진 자료구조 중 최대 힙이 있다. 최대 힙을 이용하여 다음과 같은 연산을 지원하는 프로그램을 작성하시오.

배열에 자연수 x를 넣는다.
배열에서 가장 큰 값을 출력하고, 그 값을 배열에서 제거한다.
프로그램은 처음에 비어있는 배열에서 시작하게 된다.

## 입력
첫째 줄에 연산의 개수 N(1 ≤ N ≤ 100,000)이 주어진다. 다음 N개의 줄에는 연산에 대한 정보를 나타내는 정수 x가 주어진다. 만약 x가 자연수라면 배열에 x라는 값을 넣는(추가하는) 연산이고, x가 0이라면 배열에서 가장 큰 값을 출력하고 그 값을 배열에서 제거하는 경우이다. 입력되는 자연수는 231보다 작다.

## 출력
입력에서 0이 주어진 횟수만큼 답을 출력한다. 만약 배열이 비어 있는 경우인데 가장 큰 값을 출력하라고 한 경우에는 0을 출력하면 된다.