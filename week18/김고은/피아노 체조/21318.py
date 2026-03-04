import sys

input = sys.stdin.readline

N = int(input())
levels = list(map(int, input().split()))
Q = int(input())

fault_arr = [0] * N
ans = []

for i in range (1,N): 
    fault_arr[i] = fault_arr[i-1]
    if(levels[i-1] > levels[i]):
        fault_arr[i] +=1

for _ in range (Q):
    start, end = map(int, input().split())
    ans.append(str(fault_arr[end-1] - fault_arr[start-1]))

print("\n".join(ans))