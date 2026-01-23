from collections import deque

n, k = map(int, input().split())

def bfs(v, visited):
  visited[v] = 1
  queue = deque([v])

  while queue:
    v = queue.popleft()
    
    if v == k:
      break

    if v * 2 < (100001 * 2) and visited[v * 2] == 0:
      visited[v * 2] = visited[v] + 1
      queue.append(v * 2)
    
    if v + 1 < (100001 * 2) and visited[v + 1] == 0:
      visited[v + 1] = visited[v] + 1
      queue.append(v + 1)

    if v - 1 >= 0 and visited[v - 1] == 0:
      visited[v - 1] = visited[v] + 1
      queue.append(v - 1)
  
  return visited[v] - 1

visited = [0] * 100001 * 2
print(bfs(n, visited))