
[# 문제링크](https://www.acmicpc.net/problem/1018)

## 접근 방향 설명

> N과 M이 그리 크지 않았기에, 브루트포스로 돌리는 방식을 가장 먼저 생각해낼 수 있었다. 

> - 문제에서 가장 중요한 핵심은, 체스판을 8x8 로 잘라서 쓸 수 있다는 점과 
- 흑과 백이 일정한 규칙으로 반복된다는 점이다, (좌표로 생각해보았을때, x + y 가 짝수 / 홀수 인지 여부에 따라 색상이 일정함)

> 위의 접근에 따라서 다음의 순서로 코드를 구성해볼 수 있었다. 
> 1) 체스판을 좌표와 하기 위해서, 이중배열로 변환 
> 2) 8 x 8 체스판을 만들기 위해서, 0 ~ N-8 / 0 ~ M-8 반복문을 돌며 시작점 잡기 
```js
for(let i = 0; i <= N-8; i++){
    for(let j = 0; j <= M-8; j++){
        // 이하생략 
    }
}
```
> 3) 첫 시작점이 흑인 경우와, 백인 경우를 나눠서 완전 탐색 시작 
```js 
    let W_init = count_change_to_paint(i, j, 'W');
    let B_init = count_change_to_paint(i, j, 'B');
```
> 4) 2번의 배열을 계속하여 돌리며, `count_change_to_paint`를 호출해 최소값 갱신 


---

## 풀이 과정에서 새롭게 느낀점(배운점)

- 생각해보니, 최소값을 갱신하기 위해서 배열을 쓸 필요는 없었을 것 같다. 
단순 min 변수를 바꿔주면 더 좋았을 것 같기도 

`이전 코드` 
```js
    let new_min = Math.min(W_init, B_init)

    if(min_count.length > 0){
        let min = min_count.pop();
        min_count.push(min > new_min? new_min: min);
    } else {
        min_count.push(new_min)
    }

```

`변수 재할당으로 바꿔본 코드`
```js   
    let min = Infinite; // 전역 변수 

// 반복문 내부 상위 코드 생략 
    {
        let compare_min = W_init >= B_init?  B_init: W_init

        if(min > compare_min) min = compare_min;
    }
```


---

## 풀이 코드

```js
let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N,M] = input.splice(0,1)[0].split(" ").map(Number);

let min_count = [];
let chess_arr = [];

// 체스판 이중배열로 재편성
for(let i = 0; i < N; i++ ){
    chess_arr.push(input[i].split(""));
}

// 체스판 자르기 
for(let i = 0; i <= N-8; i++){
    for(let j = 0; j <= M-8; j++){
        let W_init = count_change_to_paint(i, j, 'W');
        let B_init = count_change_to_paint(i, j, 'B');

        let new_min = Math.min(W_init, B_init)

        if(min_count.length > 0){
            let min = min_count.pop();
            min_count.push(min > new_min? new_min: min);
        } else {
            min_count.push(new_min)
        }
    }
}

// W / B 검증하여 다시 색상을 칠할 count를 계산하는 function 
function count_change_to_paint (x , y , init_color) {
    let count = 0;
    let compare_color = init_color === 'W'? 'B': 'W';

    for(let next_x = x; next_x < x + 8; next_x++){
        for(let next_y = y; next_y < y + 8; next_y++){
            if((next_x + next_y) % 2 === 0){
                if(input[next_x][next_y] === init_color) count += 1;
            }
            else if((next_x + next_y) % 2 === 1){
                if(input[next_x][next_y] === compare_color) count += 1;
            }
        }
    }

    return count;
}


console.log(...min_count)
```

---


## 문제
지민이는 자신의 저택에서 MN개의 단위 정사각형으로 나누어져 있는 M×N 크기의 보드를 찾았다. 어떤 정사각형은 검은색으로 칠해져 있고, 나머지는 흰색으로 칠해져 있다. 지민이는 이 보드를 잘라서 8×8 크기의 체스판으로 만들려고 한다.

체스판은 검은색과 흰색이 번갈아서 칠해져 있어야 한다. 구체적으로, 각 칸이 검은색과 흰색 중 하나로 색칠되어 있고, 변을 공유하는 두 개의 사각형은 다른 색으로 칠해져 있어야 한다. 따라서 이 정의를 따르면 체스판을 색칠하는 경우는 두 가지뿐이다. 하나는 맨 왼쪽 위 칸이 흰색인 경우, 하나는 검은색인 경우이다.

보드가 체스판처럼 칠해져 있다는 보장이 없어서, 지민이는 8×8 크기의 체스판으로 잘라낸 후에 몇 개의 정사각형을 다시 칠해야겠다고 생각했다. 당연히 8*8 크기는 아무데서나 골라도 된다. 지민이가 다시 칠해야 하는 정사각형의 최소 개수를 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에 N과 M이 주어진다. N과 M은 8보다 크거나 같고, 50보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에는 보드의 각 행의 상태가 주어진다. B는 검은색이며, W는 흰색이다.

## 출력
첫째 줄에 지민이가 다시 칠해야 하는 정사각형 개수의 최솟값을 출력한다.