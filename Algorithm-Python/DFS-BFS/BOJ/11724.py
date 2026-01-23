from collections import deque
import random

def bfs(graph, v, visited):
  visited[v] = True
  queue = deque([v])

  while queue:
     v = queue.popleft()
     for i in graph[v]:
        if not visited[i]:
          visited[i] = True
          queue.append(i)

def dfs(graph, v, visited):
   visited[v] = True
   stack = [v]

   while stack:
      v = stack.pop()
      for i in graph[v]:
         if not visited[i]:
            visited[i] = True
            stack.append(i)
           

n, m = map(int, input().split())

graph = [[] for _ in range(n + 1)]
visited = [False] * (n + 1)

for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

answer = 0
for i in range(1, n + 1):
  rand = random.randint(1, 2)
  if not visited[i]:
      answer += 1
      if rand == 1:
        dfs(graph, i, visited)
      else:
        bfs(graph, i, visited)

print(answer)