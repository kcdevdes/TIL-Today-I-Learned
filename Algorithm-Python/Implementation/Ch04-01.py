"""
5
R R R U D D
"""

n = int(input())
steps = input().split()

x, y = 1, 1
for step in steps:
    if step == "R":
        if y + 1 <= n:
            y += 1
    elif step == "U":
        if x - 1 > 0:
            x -= 1
    elif step == "L":
        if y - 1 > 0:
            y -= 1
    else: # D
        if x + 1 <= n:
            x += 1

print(x, y)