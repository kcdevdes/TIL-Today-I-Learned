t = int(input())

for _ in range(t):
  n, m = map(int, input().split())
  a_sizes = list(map(int, input().split()))
  b_sizes = list(map(int, input().split()))

  b_sizes.sort()

  answer = 0
  for target in a_sizes:
    start = 0
    end = len(b_sizes) - 1
    count = 0
    
    while start <= end:
      mid = (start + end) // 2
      
      if b_sizes[mid] < target:
        count = mid + 1 
        start = mid + 1
      else:
        end = mid - 1

    answer += count
  print(answer)