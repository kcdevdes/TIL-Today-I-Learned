# input
n = int(input())
p = list(map(int, input().split()))

# execution
p.sort()
result = 0
for i in range(len(p)):
    result += sum(p[:i + 1])

print(result)