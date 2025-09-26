import sys
input = sys.stdin.readline

n, m = map(int, input().split())
board = [input() for _ in range(n)]
counts = []

for i in range(n - 7):
    for j in range(m - 7):
        count_w = 0
        count_b = 0
        for k in range(i, i+8):
            for l in range(j, j+8):
                color = board[k][l]

                # 왼쪽 위 W
                if (k-i + l-j) % 2 == 0:
                    if color != "W":
                        count_w += 1
                else:
                    if color != "B":
                        count_w += 1

                # 왼쪽 위 B
                if (k-i + l-j) % 2 == 0:
                    if color != "B":
                        count_b += 1
                else:
                    if color != "W":
                        count_b += 1
        counts.append(min(count_w, count_b))

sys.stdout.write(str(min(counts)) + "\n")
