# 나이순 정렬

import sys

n = int(sys.stdin.readline())  # 온라인 저지 회원의 수
arr = []

# 회원의 인덱스, 나이, 이름ㅇ ㄹ 하나로 묶은 후(0, 21, 'Junkyu'), 배열에 넣기
for i in range(n):
    age, name = map(str, (sys.stdin.readline().split()))
    arr.append((i, int(age), name))


# 나이순으로 정렬, 나이가 같다면 등록순으로 정렬(인덱스 기준)
arr_sort = sorted(arr, key=lambda x: (x[1], x[0]))

for item in arr_sort:
    _, age, name = item
    print(age, name)