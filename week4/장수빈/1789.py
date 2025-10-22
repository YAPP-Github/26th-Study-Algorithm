# 1789. 수들의 합 (실버 5)

import sys

s = int(sys.stdin.readline())

total = 0  # 합계
num = 1    # 현재 더할 숫자
count = 0  # 더한 숫자의 개수

while total <= s:
    total += num     # 현재 수 더하기
    count += 1
    if total > s:    # 만약 합이 S를 초과하면, 마지막에 더한건 제외
        count -= 1   
        break        
    num += 1

print(count)