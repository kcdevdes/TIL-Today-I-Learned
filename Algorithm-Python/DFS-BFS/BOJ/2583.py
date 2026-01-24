from collections import deque

m, n, k = map(int, input().split())
graph = [(['o'] * n) for _ in range(m)] # m * n 크기의 2차원 배열
for _ in range(k):
  a, b, x, y = map(int, input().split())

  for i in range(b, y):
    for j in range(a, x):
      graph[i][j] = 'x'

moves = [(0, 1), (1, 0), (0, -1), (-1, 0)]
def bfs(i, j):
  queue = deque([(i, j)])
  graph[i][j] = 'x'
  area = 1

  while queue:
    ni, nj = queue.popleft()
    for move in moves:
      di, dj = ni + move[0], nj + move[1]
      if 0 <= di < m and 0 <= dj < n:
        if graph[di][dj] == 'o':
          graph[di][dj] = 'x'
          queue.append((di, dj))
          area += 1

  return area

areas = []

for i in range(m):
  for j in range(n):
    if graph[i][j] == 'o':
      areas.append(bfs(i, j))

areas = sorted(areas)
print(len(areas))
for area in areas:
  print(area, end=' ')