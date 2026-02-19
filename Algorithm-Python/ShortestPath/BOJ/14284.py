import heapq

INF = 10 ** 9
n, m = map(int, input().split())
graph = [[] for _ in range(n + 1)]
distance = [INF] * (n + 1)

for _ in range(m):
  a, b, c = map(int, input().split())
  graph[a].append((b, c))
  graph[b].append((a, c))

s, t = map(int, input().split())

def dijkstra(start):
  q = []
  distance[start] = 0
  heapq.heappush(q, (start, 0))

  while q:
    v, dist = heapq.heappop(q)
    if distance[v] < dist:
      continue
    
    for next_v, cost in graph[v]:
      new_cost = dist + cost
      if new_cost < distance[next_v]:
        distance[next_v] = new_cost
        heapq.heappush(q, (next_v, new_cost))

dijkstra(s)
print(distance[t])
  