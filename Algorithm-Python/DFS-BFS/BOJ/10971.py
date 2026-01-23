
n = int(input())
graph = []
answer = 10**32

for _ in range(n):
  graph.append(list(map(int, input().split())))


visited = [False] * n
def dfs(city, count, cost):
  global answer

  if cost >= answer:
    return

  if count == n:
    if graph[city][0] != 0:
        answer = min(answer, cost + graph[city][0])
    return

  for next_city in range(n):
    if visited[next_city]:
      continue
    if graph[city][next_city] == 0:
      continue

    visited[next_city] = True
    dfs(next_city, count + 1, cost + graph[city][next_city])
    visited[next_city] = False

visited[0] = True
dfs(0, 1, 0)
print(answer)