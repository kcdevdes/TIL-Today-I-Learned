import heapq

INF = 10 ** 10
n, d = map(int, input().split())
graph = [[] for _ in range(d + 1)]
distance = [INF] * (d + 1)

# 일반 도로 추가 (i에서 i+1으로 1km씩 이동)
for i in range(d):
  graph[i].append((i + 1, 1))

# 지름길 추가 (일방통행만)
for _ in range(n):
  start, dest, dist = map(int, input().split())
  if dest <= d:  # 도착점이 d 이내인 경우만
    graph[start].append((dest, dist))
  
def dijkstra(start):
  q = []
  distance[start] = 0
  heapq.heappush(q, (0, start))

  while q:
    dist, now = heapq.heappop(q)
    if distance[now] < dist:
      continue
    for next_node, cost in graph[now]:
      new_cost = dist + cost

      if new_cost < distance[next_node]:
        distance[next_node] = new_cost
        heapq.heappush(q, (new_cost, next_node))

dijkstra(0)
print(distance[d])