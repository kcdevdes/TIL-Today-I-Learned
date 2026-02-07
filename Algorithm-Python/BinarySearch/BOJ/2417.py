n = int(input())

start = 0
end = n
answer = 0
count = 0

while start <= end:
  mid = (start + end) // 2
  
  if mid ** 2 >= n:
    answer = mid
    end = mid - 1
  else:
    start = mid + 1

print(answer)