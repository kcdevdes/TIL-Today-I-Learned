from collections import deque

graph = [(['O'] * 6) for _ in range(12)]
moves = [(0, 1), (0, -1), (1, 0), (-1, 0)]

def debug_print():
  for i in range(12):
    print(graph[i])

def bfs(i, j, char, visited):
  visited[i][j] = True
  queue = deque([(i, j)])
  count = 1

  while queue:
    x, y = queue.popleft()
    for move in moves:
      dx = x + move[0]
      dy = y + move[1]

      if 0 <= dx < 12 and 0 <= dy < 6:
        if not visited[dx][dy] and graph[dx][dy] is char:
          count +=1
          visited[dx][dy] = True
          queue.append((dx, dy))

  return count

def refresh(visited):
  for i in range(12):
    for j in range(6):
      if visited[i][j]:
        temp = i
        while temp - 1 >= 0:
          graph[temp][j] = graph[temp - 1][j] # 한줄 아래로 당기기
          temp -= 1
        graph[0][j] = '.' # 첫 줄은 공란으로 채우기

for i in range(12):
  line_chars = input()
  for j in range(len(line_chars)):
    graph[i][j] = line_chars[j]

i = 0
j = 0
answer = 0
while i < 12 and j < 6:
  if graph[i][j] == '.':
    i += 1
    j += 1
    continue
  else:
    visited = [([False] * 6) for _ in range(12)]
    if bfs(i, j , graph[i][j], visited) >= 4:
      refresh(visited)
      i = 0
      j = 0
      answer += 1

print(answer)

