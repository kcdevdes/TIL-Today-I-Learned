def next_value(x, p):
  s = 0
  while x > 0:
    d = x % 10
    s += d ** p
    x //= 10
  return s

a, p = map(int, input().split())
current = a
idx = 0
seen = {}

while current not in seen:
  seen[current] = idx
  current = next_value(current, p)
  idx += 1

print(seen[current])