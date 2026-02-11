import heapq

n, m, k, x = map(int, input().split())
graph = [[] for _ in range(n + 1)]
INF = int(1e9)
distance = [INF] * (n + 1)

for i in range(m):
  a, b = map(int, input().split())
  graph[a].append((b, 1))

def dijkstra(start):
  q = []
  heapq.heappush(q, (0, start))
  distance[start] = 0

  while q:
    dist, now = heapq.heappop(q)
    if distance[now] < dist:
      continue

    for i in graph[now]:
      cost = dist + i[1]

      if cost < distance[i[0]]:
        distance[i[0]] = cost
        heapq.heappush(q, (cost, i[0]))

dijkstra(x)

no_city = True
for i in range(1, n + 1):
  if distance[i] == k: 
    no_city = False
    print(i)

if no_city:
  print(-1)
