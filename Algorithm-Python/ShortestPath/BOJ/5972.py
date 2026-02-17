import heapq

INF = 10 ** 10
n, m = map(int, input().split())
graph = [[] for _ in range(n + 1)]
distance = [INF] * (n + 1)

for _ in range(m):
  a, b, c = map(int, input().split())
  graph[a].append((b, c))
  graph[b].append((a, c))

def dijkstra(start):
  q = []
  distance[start] = 0
  heapq.heappush(q, (start, 0))

  while q:
    city, cost = heapq.heappop(q)
    if distance[city] < cost:
      continue
    for neighbors in graph[city]:
      n_cost = neighbors[1]
      n_city = neighbors[0]
      new_cost = distance[city] + n_cost

      if new_cost < distance[n_city]:
        distance[n_city] = new_cost
        heapq.heappush(q, (n_city, new_cost))

dijkstra(1)
print(distance[n])