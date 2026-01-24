from collections import deque

n = int(input())
a, b = map(int, input().split())
m = int(input())

graph = [[] for _ in range(n + 1)]
for _ in range(m):
  x, y = map(int, input().split())
  graph[x].append(y)
  graph[y].append(x)

def bfs(graph, v, visited):
  queue = deque([v])
  visited[v] = 1

  while queue:
    v = queue.popleft()

    for child in graph[v]:
      if visited[child] == 0:
        queue.append(child)
        visited[child] = visited[v] + 1

visited = [0] * (n + 1)
bfs(graph, a, visited)
print(visited[b] - 1)