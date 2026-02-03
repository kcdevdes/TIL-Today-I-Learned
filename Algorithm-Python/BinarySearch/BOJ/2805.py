n, m = map(int, input().split())
tree_heights = list(map(int, input().split()))

start = 0
end = max(tree_heights)
answer = 0

while start <= end:
  sum = 0
  mid = (start + end) // 2
  
  for height in tree_heights:
    if height > mid:
      sum += height - mid

  if sum < m:
    end = mid - 1
  else:
    answer = mid
    start = mid + 1

print(answer)