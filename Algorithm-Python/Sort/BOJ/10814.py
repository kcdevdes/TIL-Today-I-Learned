n = int(input())
arr = []

for _ in range(n):
  arr.append(input().split())

arr.sort(key=lambda x: int(x[0]))

for age, name in arr:
    print(age, name)