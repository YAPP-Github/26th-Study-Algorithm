import sys
input = sys.stdin.readline

n = int(input())
members = {}

for _ in range(n):
    age, name = input().split()
    members[int(age)] = [*members.get(int(age), []), name]

for age in sorted(members.keys()):
    for name in members[age]:
        sys.stdout.write(str(age) + " " + name + "\n")
