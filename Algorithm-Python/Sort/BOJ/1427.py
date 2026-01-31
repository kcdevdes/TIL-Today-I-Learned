arr = list(map(int, input()))

arr.sort(reverse=True)
for x in arr:
  print(x, end="")