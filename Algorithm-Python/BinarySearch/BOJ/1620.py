n, m = map(int, input().split())

nums_to_names = list()
names_to_nums = dict()
for i in range(n):
  name = input()
  nums_to_names.append(name)
  names_to_nums[name] = i

for _ in range(m):
  query = input()
  if query.isdigit():
    print(nums_to_names[int(query) - 1])
  else:
    print(names_to_nums[query] + 1)