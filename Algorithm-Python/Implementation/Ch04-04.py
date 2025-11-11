"""
4 4
1 1 0
1 1 1 1
1 0 0 1
1 1 0 1
1 1 1 1
"""

n, m = map(int, input().split())
a, b, d = map(int, input().split())
map_list = []
for _ in range(n):
    map_list.append(list(map(int, input().split())))

count = 0

