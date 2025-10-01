# 통계학

import sys
from collections import Counter

n = int(sys.stdin.readline())  # n개의 정수
arr = [int(sys.stdin.readline()) for _ in range(n)]

# 1. 산술평균: n개의 수들의 합을 n으로 나눈 값
average = round(sum(arr) / n)
print(average)

# 2. 중앙값: n개의 수들을 오름차순으로 나열했을 때, 중앙에 위치하는 값
middle = arr.sort()
print(arr[n // 2])

# 3. 최빈값: n개의 수들 중 가장 많이 나타나는 값, 여러 개라면 최빈값 중 두 번째로 작은 값
count_arr = Counter(arr)
max_count = max(count_arr.values())
max_key = []

for item in count_arr.items():
    key, value = item

    if value == max_count:
        max_key.append(key)

max_key.sort()

if len(max_key) == 1:
    print(max_key[0])
elif len(max_key) > 1:
    print(max_key[1])

# 4. 범위: n개의 수들 중 최댓값과 최솟값 차이
max_num = max(arr)
min_num = min(arr)
print(max_num - min_num)