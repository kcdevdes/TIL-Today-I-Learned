n = int(input())
funds = list(map(int, input().split()))
m = int(input())

start = 0
end = max(funds)
answer = 0

while start <= end:
  mid = (start + end) // 2
  sum = 0

  for fund in funds:
    sum += fund if fund < mid else mid
  
  if sum > m:
    end = mid - 1
  else:
    answer = mid
    start = mid + 1

print(answer)