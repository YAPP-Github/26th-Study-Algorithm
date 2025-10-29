// 최소 직사각형 LV1
// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  // 1. 가로, 세로를 비교하여 둘 중 큰 것은 가로에 배치, 작은 것은 세로에 배치
  const sort_sizes = sizes.map(([width, height]) =>
    width < height ? [height, width] : [width, height]
  );

  // 2. 가로 중 가장 긴 변을 선택, 세로 중 가장 긴 변을 선택
  const maxWidth = Math.max(...sort_sizes.map(([width]) => width));
  const maxHeight = Math.max(...sort_sizes.map(([_, height]) => height));

  return maxWidth * maxHeight;
}
