n, m = map(int, input().split())
deposits = []
for i in range(n):
  deposits.append(int(input()))

start = max(deposits)
end = sum(deposits)
answer = end

while start <= end:
  mid = (start + end) // 2
  remain = mid
  count = 1

  for i in range(n):
    if remain < deposits[i]:
      count += 1
      remain = mid
    remain -= deposits[i]

  if count <= m:
    answer = mid
    end = mid - 1
  else:
    start = mid + 1

print(answer)
  
