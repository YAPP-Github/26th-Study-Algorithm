function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (let i = 0; i < sizes.length; i++) {
    const [a, b] = sizes[i];

    const w = Math.max(a, b);
    const h = Math.min(a, b);

    if (w > maxWidth) maxWidth = w;
    if (h > maxHeight) maxHeight = h;
  }

  return maxWidth * maxHeight;
}
