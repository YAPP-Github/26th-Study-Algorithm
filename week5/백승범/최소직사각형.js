function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

    for (let i = 0; i < sizes.length; i++) {
        const width = Math.max(sizes[i][0], sizes[i][1]);
        const height = Math.min(sizes[i][0], sizes[i][1]);
        
        if (width > maxWidth) {
            maxWidth = width;
        }
        if (height > maxHeight) {
            maxHeight = height;
        }
    }

  return maxWidth * maxHeight;
}