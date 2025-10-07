
[# 문제링크](https://www.acmicpc.net/problem/2667)

## 접근 방향 설명
> 모든 연결된 1을 방문하여, 갯수를 체크하면 되는 문제로 DFS / BFS를 이용하면 되는 문제! 

> 가장 먼저 지도상 '1' 인 시작좌표를 구하기 위해서 이중 반복문을 돌린다.
```js
for(let i =0; i < N; i++){
    for(let j =0; j < N; j++){
        if(map_arr[i][j] == 1 && visited_arr[i][j] == 1){
            need_to_visited.push([i,j]);
            visited_arr[i][j] = 0;
            dfs();
        } else continue;
    }
}
```
> 스택에 방문해야할 좌표를 하나씩 꺼내어, 같은 영역에 해당하는 단지수를 추가해준다 `group_count += 1`
> 인근 좌표를 상하좌우로 움직이며, map 좌표 안에 존재하고 + 방문한적 없으며 + 1인 영역을 탐색 스택에 push하고 방문 표시한다.
> 인근 영역에 더 이상 탐색할 곳이 없다면 `group_count_arr.push(group_count);` 해준다

 
## 풀이 과정에서 새롭게 느낀점(배운점)

- 큰 문제없이 해결하여 생략!

---

## 풀이 코드

```js
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.splice(0,1)[0];
let map_arr = [];
let group_count_arr = [];
let visited_arr = Array.from({length: N}, () => Array.from({length:N}).fill(1));
let need_to_visited = [];
let moves = [[-1,0], [1,0], [0, -1], [0,1]];

for(let i = 0; i < N; i++){
    map_arr.push(input[i].split(""));
};

// 탐색 시작점 찾기 
for(let i =0; i < N; i++){
    for(let j =0; j < N; j++){
        if(map_arr[i][j] == 1 && visited_arr[i][j] == 1){
            need_to_visited.push([i,j]);
            visited_arr[i][j] = 0;
            dfs();
        } else continue;
    }
}


function dfs () {
    let group_count = 0;
    while(need_to_visited.length > 0){
        let [x, y] = need_to_visited.pop();
        group_count += 1

        for(let move of moves) {
            let next_x = x + move[0];
            let next_y = y + move[1];

            if(next_x >=0 && next_x < N && next_y >= 0 && next_y < N){
                if(visited_arr[next_x][next_y] == 1 && map_arr[next_x][next_y] == 1 ){
                    // 방문 예정 좌표 -> 방문 표시를 통한 중복 방문 방지
                    visited_arr[next_x][next_y] = 0;
                    need_to_visited.push([next_x, next_y]);
                }
            }
        }
    }

    group_count_arr.push(group_count);
}

group_count_arr.sort((a,b)=> a-b);

console.log(group_count_arr.length);
console.log(group_count_arr.join("\n"))
```

---

## 문제
<그림 1>과 같이 정사각형 모양의 지도가 있다. 1은 집이 있는 곳을, 0은 집이 없는 곳을 나타낸다. 철수는 이 지도를 가지고 연결된 집의 모임인 단지를 정의하고, 단지에 번호를 붙이려 한다. 여기서 연결되었다는 것은 어떤 집이 좌우, 혹은 아래위로 다른 집이 있는 경우를 말한다. 대각선상에 집이 있는 경우는 연결된 것이 아니다. <그림 2>는 <그림 1>을 단지별로 번호를 붙인 것이다. 지도를 입력하여 단지수를 출력하고, 각 단지에 속하는 집의 수를 오름차순으로 정렬하여 출력하는 프로그램을 작성하시오.

## 입력
첫 번째 줄에는 지도의 크기 N(정사각형이므로 가로와 세로의 크기는 같으며 5≤N≤25)이 입력되고, 그 다음 N줄에는 각각 N개의 자료(0혹은 1)가 입력된다.

## 출력
첫 번째 줄에는 총 단지수를 출력하시오. 그리고 각 단지내 집의 수를 오름차순으로 정렬하여 한 줄에 하나씩 출력하시오.