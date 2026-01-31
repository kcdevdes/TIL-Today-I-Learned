n = int(input())
arr = []
for _ in range(n):
  arr.append(list(map(int, input().split())))

arr.sort()
for x, y in arr:
  print(x, y, sep=" ")