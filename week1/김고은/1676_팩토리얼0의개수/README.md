
[# 문제링크](https://www.acmicpc.net/problem/1676)

## 접근 방향 설명

> 문제를 이해하지 못해서 조금 시간이 걸렸던 문제, 
**"N!에서 뒤에서부터 처음 0이 아닌 숫자가 나올 때까지 0의 개수"** 라고 한다면 
5! -> 120 (ans: 1)
10! -> 3,628,800 (ans: 2) 가 된다 

> 이말은 즉슨, N! 의 0자리를 구하는 문제로 팩토리얼을 거듭했을때 각 숫자의 소인수 5 /2 의 갯수를 구해주면 되었다. 

---

## 풀이 코드

```js
let fs = require('fs');
let filePath = process.platform === 'linux'? '/dev/stdin': __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let ans = 0;

let can_divide_five = 0;
let can_divide_two = 0;

for(let num = +input; num >= 1; num--){
    if(num % 2 === 0) {
        can_divide_two += divide_loop(num, 2)
    }
    if(num % 5 === 0) {
        can_divide_five += divide_loop(num, 5)
    }
    
}

function divide_loop (origin_input, num) {
    let count = 0;
    let temp = origin_input;

    if(temp % num === 0) {
        while(temp % num === 0){
            count += 1;
            temp /= num
        } 
    }

    return count;
}

ans = Math.min(can_divide_five, can_divide_two);

console.log(ans)
```

---


## 문제
N!에서 뒤에서부터 처음 0이 아닌 숫자가 나올 때까지 0의 개수를 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에 N이 주어진다. (0 ≤ N ≤ 500)

## 출력
첫째 줄에 구한 0의 개수를 출력한다.

