"""
a1
"""
start = input()
row = int(start[1])
column = int(ord(start[0]) - int(ord('a'))) + 1

steps = [(-2, -1), (-2, 1), (2, 1), (2, -1), (-1, 2), (1, 2), (1, -2), (1, -2)]
result = 0
for step in steps:
    nr = step[0] + row
    nc = step[1]  + column

    if nr <= 0 or nr > 8 or nc <= 0 or nc > 8:
        continue

    result += 1

print(result)