const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let parking_space = [];
let cars = [0];
let orders = [];
let ans = 0;

for (let i = 1; i <= N; i++) {
  parking_space.push(Number(input[i]));
}

for (let i = N + 1; i <= N + M; i++) {
  cars.push(Number(input[i]));
}

for (let i = N + M + 1; i < input.length; i++) {
  orders.push(Number(input[i]));
}

let empty_space = [];
for (let i = 0; i < N; i++) empty_space.push(i);

let map = new Map(); 
let waiting_cars = [];

orders.forEach((order) => {
  if (order > 0) {
    if (empty_space.length > 0) {
      let idx = empty_space.shift();
      ans += cars[order] * parking_space[idx];
      map.set(order, idx);
    } else {
      waiting_cars.push(order);
    }
  }
  else {
    let car_num = -order;
    let space = map.get(car_num);
    map.delete(car_num);

    empty_space.push(space);
    empty_space.sort((a, b) => a - b);

    if (waiting_cars.length > 0) {
      let idx = empty_space.shift();
      let next_car = waiting_cars.shift();

      ans += cars[next_car] * parking_space[idx];
      map.set(next_car, idx);
    }
  }
});

console.log(ans);
