
[# 문제링크](https://www.acmicpc.net/problem/11286)

## 접근 방향 설명
> N M 이 꽤큼 ->  완전탐색은 안될거 같고 이분탐색해보면 좋을 것 같단 생각이 들었음
> 둘중 하나를 일단 정렬 돌려서 놓고, 하나 순회하면서 있/없 여부를 배열에 기록  


## 풀이 과정에서 새롭게 느낀점(배운점)

- 딱히 없다! 무난히 빠르게 풀어서 그냥 기분이 좋았음

---

## 풀이 코드

```js
const fs = require("fs");

const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, arr1, M, arr2] = input;
let ans = [];

let sanggun_arr = arr1.split(" ").map(Number);
let compare_arr = arr2.split(" ").map(Number);

sanggun_arr.sort((a,b) => a - b);

compare_arr.map((e) => {
    let start = 0;
    let end = sanggun_arr.length -1;
    let existed = 0; // 0 없음 

    while(start >= 0 && start <=  end){
        let mid = Math.floor((start + end) / 2);

        if(sanggun_arr[mid] > e){
            end = mid -1;
        } else if ( e > sanggun_arr[mid]){
            start = mid + 1; 
        } else {
            existed = 1; // 있음
            break;
        }
    }
    ans.push(existed)
})

console.log(ans.join(" "))
```

---

## 문제
숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 가지고 있는지 아닌지를 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에 상근이가 가지고 있는 숫자 카드의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 둘째 줄에는 숫자 카드에 적혀있는 정수가 주어진다. 숫자 카드에 적혀있는 수는 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다. 두 숫자 카드에 같은 수가 적혀있는 경우는 없다.

셋째 줄에는 M(1 ≤ M ≤ 500,000)이 주어진다. 넷째 줄에는 상근이가 가지고 있는 숫자 카드인지 아닌지를 구해야 할 M개의 정수가 주어지며, 이 수는 공백으로 구분되어져 있다. 이 수도 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다

## 출력
첫째 줄에 입력으로 주어진 M개의 수에 대해서, 각 수가 적힌 숫자 카드를 상근이가 가지고 있으면 1을, 아니면 0을 공백으로 구분해 출력한다.

