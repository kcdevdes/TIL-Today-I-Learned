from collections import deque

a, b = map(int, input().split())

graph = []
for _ in range(a):
  graph.append(list(map(int, input())))

def bfs(x, y):
  moves = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  queue = deque()
  queue.append([x, y])

  while queue:
    mx, my = queue.popleft()
    for move in moves:
      next_x = move[0] + mx
      next_y = move[1] + my

      if next_x < 0 or next_x >= a or next_y < 0 or next_y >= b:
        continue

      if graph[next_x][next_y] == 1:
        graph[next_x][next_y] = graph[mx][my] + 1
        queue.append([next_x, next_y])

bfs(0, 0)
print(graph[a - 1][b - 1]) # 해당 위치