k, n = map(int, input().split())
lan_cables = []
for _ in range(k):
  lan_cables.append(int(input()))

start = 1
end = max(lan_cables)
answer = 0

while start <= end :
  mid = (start + end) // 2
  count = 0

  for cable in lan_cables:
    count += cable // mid

  if count < n:
    end = mid - 1
  else:
    answer = mid
    start = mid + 1

print(answer)