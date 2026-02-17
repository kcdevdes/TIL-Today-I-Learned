import heapq

n = int(input())
m = int(input())
INF = 10 ** 10
graph = [[] for i in range(n + 1)]
distance = [INF] * (n + 1)

for _ in range(m):
  start, dest, cost = map(int, input().split())
  graph[start].append((dest, cost))

start, dest = map(int, input().split())

def dijkstra(start):
  q = []
  heapq.heappush(q, (start, 0))
  distance[start] = 0
  
  while q:
    city, cost = heapq.heappop(q)
    if distance[city] < cost:
      continue
    for neighbors in graph[city]:
      new_cost = cost + neighbors[1]

      if new_cost < distance[neighbors[0]]:
        distance[neighbors[0]] = new_cost
        heapq.heappush(q, (neighbors[0], new_cost))
  
dijkstra(start)
print(distance[dest])