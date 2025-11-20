from collections import deque

n, m, v = map(int, input().split())

graph = []
for _ in range(m):
  graph.append(list(map(int, input().split())))

adjacent_list = [[] for i in range(n + 1)]
for list in graph:
  adjacent_list[list[0]].append(list[1])
  adjacent_list[list[1]].append(list[0])
  adjacent_list[list[0]].sort()
  adjacent_list[list[1]].sort()

def dfs(g, v, visited):
  visited[v] = True
  print(v, end=' ')
  for i in g[v]:
    if not visited[i]:
      dfs(g, i, visited)

def bfs(g, start, visited):
  queue = deque([start])
  visited[start] = True
  while queue:
    v = queue.popleft()
    print(v, end=' ')
    for i in g[v]:
      if not visited[i]:
        queue.append(i)
        visited[i] = True

dfs(adjacent_list, v, [False] * len(adjacent_list))
print()
bfs(adjacent_list, v, [False] * len(adjacent_list))


