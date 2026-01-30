N = 5
arr = []
for _ in range(N):
  arr.append(int(input()))

arr.sort()
print(sum(arr)//N)
print(arr[N//2])