# 1181. 단어 정렬 (실버 5)

import sys

# n: 단어의 개수
n = int(sys.stdin.readline())

word_set = set()

# set을 사용하여 중복된 요소 제거
for _ in range(n):
    word = sys.stdin.readline().strip()
    word_set.add(word)

# 1. 길이가 짧은 순으로 먼저 정렬
# 2. 길이가 같을 경우 사전 순으로 정렬
sorted_word_set = sorted(word_set, key=lambda item: (len(item), item))

for word in sorted_word_set:
    print(word)

