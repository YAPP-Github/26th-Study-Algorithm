# 2407. 조합 (실버3)

import sys
from math import comb

n, m = map(int, (sys.stdin.readline().split()))

print(comb(n, m))  
