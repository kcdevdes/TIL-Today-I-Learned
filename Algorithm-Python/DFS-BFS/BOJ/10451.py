def solve(perm):
  answer = 0
  visited = [False] * len(perm)

  for i in range(1, len(perm)):
    jmp = i - 1

    # 과거 순환으로 이미 넘어간 상태일 시
    if visited[jmp]:
      continue

    while True:
      # 이미 방문한 적 있을 때 == 순열의 끝
      if visited[jmp]:
        answer += 1
        break

      # 아닐 시, 방문 표기, 다음 jmp로 넘김
      visited[jmp] = True
      jmp = perm[jmp] - 1
  
  return answer
  

t = int(input())

for _ in range(t):
  n = int(input())
  perm = list(map(int, input().split()))
  print(solve(perm))

