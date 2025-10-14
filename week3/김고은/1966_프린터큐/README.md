
[# 문제링크](https://www.acmicpc.net/problem/1158)

## 접근 방향 설명
> 문제의 이름처럼 큐를 사용해서 풀었던 문제! 
> print Queue 함수의 작동원리
> (1) 높은 우선 순위 뽑아내기 
> (2) 앞에서 부터 하나 뽑아서 높은 우선순위 -> 다시 넣지 않고 count +=1
> (3) 최적의 우선순위 아니면, 다시 push 해서 삽입 
> (4) 최적의 우선순위 + 내가 원하는 카드 -> 인덱스 계산에 따라 idx == 0일때 while 문 break
`idx = (idx - 1 + arr.length) % arr.length`
  
## 풀이 과정에서 새롭게 느낀점(배운점)

- 생략! 

---

## 풀이 코드

```js
const fs = require("fs");

const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let ans = [];
let T = input[0];

for(let i =1; i <= T; i++){
    let [N, M] = input[i*2 -1].split(" ").map(Number);
    let print_dummy = input[i*2].split(" ").map(Number);
    
    ans.push(printQueue(print_dummy, M))
}

function printQueue (arr, idx) {
    let max = 0;
    let count = 1;

    while(1){
        max = Math.max(...arr); // 높 우선순위 
        let first = arr.shift();

        if(first === max) {
            if(idx == 0) break;
            else {
                max = 0;
                count+=1;
            }
        } else arr.push(first);

        idx = (idx - 1 + arr.length) % arr.length
    }
    return count;
}

console.log(ans.join("\n"))
```

---

## 문제
여러분도 알다시피 여러분의 프린터 기기는 여러분이 인쇄하고자 하는 문서를 인쇄 명령을 받은 ‘순서대로’, 즉 먼저 요청된 것을 먼저 인쇄한다. 여러 개의 문서가 쌓인다면 Queue 자료구조에 쌓여서 FIFO - First In First Out - 에 따라 인쇄가 되게 된다. 하지만 상근이는 새로운 프린터기 내부 소프트웨어를 개발하였는데, 이 프린터기는 다음과 같은 조건에 따라 인쇄를 하게 된다.

현재 Queue의 가장 앞에 있는 문서의 ‘중요도’를 확인한다.
나머지 문서들 중 현재 문서보다 중요도가 높은 문서가 하나라도 있다면, 이 문서를 인쇄하지 않고 Queue의 가장 뒤에 재배치 한다. 그렇지 않다면 바로 인쇄를 한다.
예를 들어 Queue에 4개의 문서(A B C D)가 있고, 중요도가 2 1 4 3 라면 C를 인쇄하고, 다음으로 D를 인쇄하고 A, B를 인쇄하게 된다.

여러분이 할 일은, 현재 Queue에 있는 문서의 수와 중요도가 주어졌을 때, 어떤 한 문서가 몇 번째로 인쇄되는지 알아내는 것이다. 예를 들어 위의 예에서 C문서는 1번째로, A문서는 3번째로 인쇄되게 된다.

## 입력
첫 줄에 테스트케이스의 수가 주어진다. 각 테스트케이스는 두 줄로 이루어져 있다.

테스트케이스의 첫 번째 줄에는 문서의 개수 N(1 ≤ N ≤ 100)과, 몇 번째로 인쇄되었는지 궁금한 문서가 현재 Queue에서 몇 번째에 놓여 있는지를 나타내는 정수 M(0 ≤ M < N)이 주어진다. 이때 맨 왼쪽은 0번째라고 하자. 두 번째 줄에는 N개 문서의 중요도가 차례대로 주어진다. 중요도는 1 이상 9 이하의 정수이고, 중요도가 같은 문서가 여러 개 있을 수도 있다.

## 출력
각 테스트 케이스에 대해 문서가 몇 번째로 인쇄되는지 출력한다.