// [1차] 캐시 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/17680

// 0 <= cacheSize <= 30, cities <= 100,000
// 최대 허용 시간복잡도 O(NlogN)

function solution(cacheSize, cities) {
  let count = 0;
  let queue = Array(cacheSize).fill("");

  if (cacheSize === 0) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();

    if (!queue.includes(city)) {
      if (queue.length < cacheSize) {
        queue.push(city);
        count += 5;
      } else if (queue.length === cacheSize) {
        queue.shift();
        queue.push(city);
        count += 5;
      }
    } else {
      const index = queue.indexOf(city);
      queue.splice(index, 1);
      queue.push(city);
      count += 1;
    }
  }

  return count;
}
