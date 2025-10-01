# 체스판 다시 칠하기

import sys

n, m = map(int, (sys.stdin.readline().split())) # n: 행, m: 열
arr = []

for _ in range(n):
    row = list(map(str, (sys.stdin.readline().strip())))
    arr.append(row)

# 가장 작은 색칠 횟수를 알아내기 위한 배열 생성
count_arr = []

# 8 * 8로 자르기
for x in range(n - 7):  # 시작 지점이 될 수 있는 행의 좌표 (ex. 0 ~ 7)
    for y in range(m - 7):  # 시작 지점이 될 수 있는 열의 좌표 (ex. 0 ~ 7)
        w_count = 0
        b_count = 0
        # 시작 지점으로부터 8 X 8 체스판 생성
        for i in range(x, x + 8):
            for j in range(y, y + 8):
                if (i + j) % 2 == 0:  # 행 인덱스 + 열 인덱스가 짝수면, "시작한 색"과 동일한 색을 칠해줌
                    if arr[i][j] == "B":
                        b_count += 1
                    else:
                        w_count += 1
                else:  # 행 인덱스 + 열 인덱스가 홀수면, "시작한 색"과 다른 색을 칠해줌
                    if arr[i][j] == "B":
                        w_count += 1
                    else:
                        b_count += 1
        
        # 두가지 count 중, 더 적게 칠하는 경우만 저장
        count_arr.append(min(w_count, b_count))

# 최종적으로 제일 작은 count만 뽑기
print(min(count_arr))