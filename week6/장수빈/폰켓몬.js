// 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const half = nums.length / 2;
  const newNums = [...new Set(nums)];

  return newNums.length <= half ? newNums.length : half;
}
