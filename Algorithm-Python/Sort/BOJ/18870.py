n = int(input())
arr = list(map(int, input().split()))

set_nums = set(arr)
dict_nums = dict()
count = 0
for x in sorted(list(set_nums)):
  dict_nums[x] = count
  count += 1

for x in arr:
  print(dict_nums[x], end=" ") 