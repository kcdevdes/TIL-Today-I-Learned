import heapq

n, m = map(int, input().split())
sight = list(map(int, input().split()))
sight[n - 1] = 0

INF = 10 ** 9
graph = [[] for _ in range(n)]
distance = [INF] * n

for i in range(m):
    a, b, t = map(int, input().split())
    graph[a].append((b, t))
    graph[b].append((a, t))

distance[0] = 0
pq = [(0, 0)]

while pq:
    dist, node = heapq.heappop(pq)
    
    if dist > distance[node]:
        continue
    
    if sight[node] == 1 and node != n - 1:
        continue
    
    for next_node, time in graph[node]:
        if sight[next_node] == 1:
            continue
        
        new_dist = dist + time
        if new_dist < distance[next_node]:
            distance[next_node] = new_dist
            heapq.heappush(pq, (new_dist, next_node))

print(distance[n-1] if distance[n-1] != INF else -1)