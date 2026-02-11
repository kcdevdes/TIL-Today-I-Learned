n, m = map(int, input().split())
k = int(input())
INF = 1e8
graph = [[] for _ in range(n + 1)]

visited = [False] * (n + 1)
distance = [INF] * (n + 1)

for _ in range(m):
  u, v, w = map(int, input().split())
  graph[u].append((v, w))

def get_shortest_node():
  min_val = INF
  index = 0
  for i in range(1, n + 1):
    if distance[i] < min_val and not visited[i]:
      min_val = distance[i]
      index = i
  return index

def dijkstra(start):
  distance[start] = 0
  visited[start] = True

  for i in graph[start]:
    distance[i[0]] = i[1]
  
  for _ in range(n - 1):
    now = get_shortest_node()
    visited[now] = True

    for j in graph[now]:
      if distance[now] + j[1] < distance[j[0]]:
        distance[j[0]] = distance[now] + j[1]

dijkstra(k)
print(distance)

"""
5 6
1
5 1 1
1 2 1
1 3 3
2 3 1
2 4 5
3 4 2
"""