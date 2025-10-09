# 2852. NBA 농구 (실버 3)

import sys

n = int(sys.stdin.readline())  # n: 골이 들어간 횟수

information = []

for _ in range(n):
    team, time = map(str, (sys.stdin.readline().split()))

    # MM:SS -> Second로 변경하기
    minute, second = time.split(":")
    time_to_seconds = int(minute) * 60 + int(second)

    # (팀 번호, 득점 시간(초))
    information.append((int(team), time_to_seconds))

total_time = 48 * 60  # 총 경기 시간
score1 = score2 = 0
lead_time1 = lead_time2 = 0
prev_lead_team = 0  # 이전에 리드했던 팀

# 리드1 -> 리드1 -> 리드1 -> .. : 누적 뺄셈하면 안됨
# 리드1 -> 리드 2 : 동점이 되는 상황을 판별하기 (1 -> 2 or 2 -> 1)
# 리드하고 있지 않다가 이길 경우 (0 -> 1, 0 -> 2)

for team, time in information:
    if team == 1:
        score1 += 1
    else:
        score2 += 1

    # 1. 새롭게 득점하는 상황일 경우
    # 1-1. 1번 팀이 리드하고 있을 경우
    if prev_lead_team != team and team == 1 and score1 > score2:
        lead_time1 += total_time - time
        prev_lead_team = 1

    # 1-2. 2번 팀이 리드하고 있을 경우
    elif prev_lead_team != team and team == 2 and score1 < score2:
        lead_time2 += total_time - time
        prev_lead_team = 2

    # 1-3. 같은 팀이 연속적으로 리드하고 있을 경우 (ex. 1 -> 1 -> 1): 계산할 필요 X
    elif prev_lead_team == team and (score1 > score2 or score1 < score2):  # 같은 팀이 연속 득점하는 경우
        continue
    
    # 2. 동점이 됐을 경우
    if prev_lead_team != team and score1 == score2:
        # 2-1. 이전에 득점한 팀이 1번이었는데 2번이 득점해서 동점이 된 경우
        if prev_lead_team == 1:
            lead_time1 -= (total_time - time)

        # 2-2. 이전에 득점한 팀이 2번이었는데 1번이 득점해서 동점이 된 경우  
        elif prev_lead_team == 2:
            lead_time2 -= (total_time - time)
        prev_lead_team = 0

m1, s1 = lead_time1 // 60, lead_time1 % 60
m2, s2 = lead_time2 // 60, lead_time2 % 60

print(f"{m1:02}:{s1:02}")
print(f"{m2:02}:{s2:02}")