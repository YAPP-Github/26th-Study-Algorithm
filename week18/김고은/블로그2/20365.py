import sys

input = sys.stdin.readline

N = int(input().strip())
arr = input().strip()

paint_blue_after = 1
paint_red_after = 1

splited_by_red = arr.split('R')
splited_by_blue = arr.split('B')

for i in range(len(splited_by_red)):
    if splited_by_red[i] == '':
        continue
    else:
        paint_blue_after += 1

for i in range(len(splited_by_blue)):
    if splited_by_blue[i] == '':
        continue
    else:
        paint_red_after += 1

print(min(paint_blue_after, paint_red_after))