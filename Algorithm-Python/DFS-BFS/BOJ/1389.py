from collections import deque

n, m = map(int, input().split())
graph = [[] for _ in range(n + 1)]
for _ in range(m):
  a, b = map(int, input().split())
  graph[a].append(b)
  graph[b].append(a)
  
def bfs(graph, v, visited):
  queue = deque([v])
  visited[v] = 0
  
  while queue:
    v = queue.popleft()
    for friend in graph[v]:
      if visited[friend] == -1:
        visited[friend] = visited[v] + 1
        queue.append(friend)

best_person = 1
max_sum = 10**15

for i in range(1, n + 1):
  visited = [-1] * (n + 1)
  bfs(graph, i, visited)
  s = sum(visited[1:])
  if s < max_sum:
    max_sum = s
    best_person = i

print(best_person)
