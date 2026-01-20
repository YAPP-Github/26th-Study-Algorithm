// 실버 2. 주차장
// https://www.acmicpc.net/problem/5464

// 알고리즘: 시뮬레이션

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

// 주차 공간들의 단위 무게당 요금
const parkings = new Map();
for (let i = 1; i <= n; i++) {
  parkings.set(i, Number(input[i]));
}

// 차량들의 무게
const cars = new Map();
for (let i = n + 1; i <= n + m; i++) {
  cars.set(i - n, Number(input[i]));
}

// 차들의 주차장 출입 순서
const arr = [];
for (let i = n + m + 1; i <= n + m + 2 * m; i++) {
  arr.push(Number(input[i]));
}

// 비어있는 주차 공간: 0이면 비어있음
const empty_parking = Array(n).fill(0);

// 자동차들의 대기 공간
const queue = [];

// 총 주차장 수입
let fees = 0;

for (let i = 0; i < arr.length; i++) {
  const car = arr[i]; // 들어오려는 차

  // 차가 주차장에서 빠져나올 경우
  if (car < 0) {
    for (let j = 0; j < empty_parking.length; j++) {
      if (empty_parking[j] === -car) {
        empty_parking[j] = 0;

        // 대기중인 차량이 있다면, 빠져나간 자리에 대기중인 차량 바로 주차
        if (queue.length > 0) {
          const waiting_car = queue.shift();
          empty_parking[j] = waiting_car;

          const parking_fee = parkings.get(j + 1);
          const car_weight = cars.get(empty_parking[j]);
          fees += parking_fee * car_weight;
        }
      }
    }
  }
  // 차가 주차장에 들어갈 경우
  else {
    // 주차 공간에 비어있는 곳이 있을 경우
    if (empty_parking.some((parking) => parking === 0)) {
      for (let j = 0; j < empty_parking.length; j++) {
        if (empty_parking[j] === 0) {
          empty_parking[j] = car;

          const parking_fee = parkings.get(j + 1);
          const car_weight = cars.get(empty_parking[j]);
          fees += parking_fee * car_weight;

          break;
        }
      }
    } else {
      // 주차 공간에 비어있는 곳이 없을 경우 해당 차는 queue에서 대기
      queue.push(car);
    }
  }
}

console.log(fees);
