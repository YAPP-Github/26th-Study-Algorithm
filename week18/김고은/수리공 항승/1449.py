import sys

input = sys.stdin.readline

N,L = map(int, input().split())
inputs = list(map(int, input().split()))

input = inputs.sort()
coverd_areea = 0
ans = 0

for i in range (0,N):
    if(coverd_areea > inputs[i]):
        continue
    ans+=1
    coverd_areea = inputs[i] + L         
    

print(ans)