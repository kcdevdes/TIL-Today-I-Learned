from functools import cmp_to_key

n = int(input())
serials = list()

for _ in range(n):
  serials.append(input())

def compare(x, y):
  if len(x) != len(y):
    return len(x) - len(y)
  else:
    sum_x = sum(int(c) for c in x if c.isdigit())
    sum_y = sum(int(c) for c in y if c.isdigit())
    if sum_x != sum_y:
      return sum_x - sum_y
    else:
      if x < y:
        return -1
      elif x > y:
        return 1
      else:
        return 0

serials.sort(key=cmp_to_key(compare))
for serial in serials:
  print(serial)