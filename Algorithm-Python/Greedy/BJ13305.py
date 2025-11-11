n = int(input())
roads = list(map(int, input().split()))
prices = list(map(int, input().split()))

total = 0
lowest = prices[0]

# 1번째 주유소까지 비용
total += roads[0] * prices[0]

# 이후 주유소 비용
for i in range(1, len(roads)):
    lowest = min(lowest, prices[i])
    total += lowest * roads[i]

print(total)
