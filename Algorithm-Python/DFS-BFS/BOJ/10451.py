import sys
sys.setrecursionlimit(2000)

t = int(input())

def dfs(x, perm, visited):
  visited[x] = True
  next = perm[x]
  if not visited[next]:
    dfs(next, perm, visited)


def solve(perm, n):
  visited = [True] + [False] * n
  answer = 0

  for i in range(1, n + 1):
    if not visited[i]:
      dfs(i, perm, visited)
      answer += 1
  
  print(answer)


for _ in range(t):
  n = int(input()) # 순열의 크기
  perm = list(map(int, input().split())) # 순열
  solve(perm, n)

