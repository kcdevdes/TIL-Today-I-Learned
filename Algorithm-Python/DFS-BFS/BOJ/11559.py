from collections import deque

graph = [(['.'] * 6) for _ in range(12)]
moves = [(0, 1), (0, -1), (1, 0), (-1, 0)]

H = 12
W = 6

def bfs(i, j, char, visited):
  visited[i][j] = True
  queue = deque([(i, j)])
  popped = [(i, j)]
  count = 1

  while queue:
    x, y = queue.popleft()
    for move in moves:
      dx = x + move[0]
      dy = y + move[1]

      if 0 <= dx < H and 0 <= dy < W:
        if not visited[dx][dy] and graph[dx][dy] == char:
          visited[dx][dy] = True
          queue.append((dx, dy))
          popped.append((dx, dy))

  if len(popped) >= 4:
    return popped
  else:
    return []

def replaceChars(visited):
  for i in range(H):
    for j in range(W):
      if visited[i][j]:
        graph[i][j] = '.'

def apply_gravity(graph):
  for j in range(W):
    stack = []
    for i in range(H - 1, -1, -1):
      if graph[i][j] != '.':
        stack.append(graph[i][j])
      
    for i in range(H - 1, -1, -1):
      if stack:
        graph[i][j] = stack.pop(0)
      else:
        graph[i][j] = "."

### MAIN ###

for i in range(H):
  line_chars = input()
  for j in range(len(line_chars)):
    graph[i][j] = line_chars[j]

answer = 0

while True:
  splashed = False
  visited = [[False] * W for _ in range(H)]
  to_pop = []

  for i in range(H):
    for j in range(W):
      if graph[i][j] != '.' and not visited[i][j]:
        group = bfs(i, j , graph[i][j], visited)
        if group:
          to_pop.extend(group)
  
  if to_pop:
    splashed = True
    for i, j, in to_pop:
      graph[i][j] = "."
    
    apply_gravity(graph)
    answer += 1
  else:
    break

print(answer)

