import heapq

n, k = map(int, input().split())
INF = 10 ** 9

distance = [INF] * 100001
distance[n] = 0

pq = [(0, n)]  # (거리, 위치)

while pq:
    dist, x = heapq.heappop(pq)
    
    if dist > distance[x]:
        continue
    
    if x == k:
        print(dist)
        break
    
    # 다음 이동 가능 위치들
    next_moves = []
    
    # 순간이동 (0초) - 우선순위 높음
    if 2 * x <= 100000:
        next_moves.append((0, 2 * x))
    
    # 걷기 (1초)
    if x > 0:
        next_moves.append((1, x - 1))
    if x < 100000:
        next_moves.append((1, x + 1))
    
    for cost, next_x in next_moves:
        next_dist = dist + cost
        if next_dist < distance[next_x]:
            distance[next_x] = next_dist
            heapq.heappush(pq, (next_dist, next_x))