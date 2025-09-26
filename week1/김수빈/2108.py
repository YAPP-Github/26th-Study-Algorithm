import sys
from collections import Counter
input = sys.stdin.readline

n = int(input())
numbers = [int(input()) for _ in range(n)]
numbers.sort()

# 1. 산술평균 (반올림)
avg = round(sum(numbers) / n)

# 2. 중앙값
median = numbers[n // 2]

# 3. 최빈값
counter = Counter(numbers)
max_count = counter.most_common(1)[0][1]
candidates = [num for num, count in counter.items() if count == max_count]
candidates.sort()
# 두 번째로 작은 값 사용
mode = candidates[0] if len(candidates) == 1 else candidates[1]

# 4. 범위
diff = numbers[-1] - numbers[0]

sys.stdout.write(str(avg) + "\n")
sys.stdout.write(str(median) + "\n")
sys.stdout.write(str(mode) + "\n")
sys.stdout.write(str(diff) + "\n")
