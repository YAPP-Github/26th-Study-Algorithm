# 2910. 빈도 정렬 (실버 3)

import sys

# n: 메시지 길이, c: 숫자는 모두 c보다 작거나 같음
n, c = map(int, (sys.stdin.readline().split()))
arr = list(map(int, (sys.stdin.readline().split())))

# 각 숫자별 등장 횟수를 저장할 dictionary
# dict()은 입력 순서를 보장
numbers = dict()

# num -> key 값, number[nums] -> value 값 (원소 개수)
for num in arr:
    if num in numbers:
        numbers[num] += 1
    else:
        numbers[num] = 1

# 자주 등장하는 빈도순을 기준으로 정렬 (내림차순)
sorted_numbers = sorted(numbers.items(), key=lambda x: -x[1])
    
for key, value in sorted_numbers:
    print((str(key) + " ") * value, end=" ")