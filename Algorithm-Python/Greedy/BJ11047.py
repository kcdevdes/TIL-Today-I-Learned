"""
준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매우 많이 가지고 있다.
동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다.
이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.
"""

n, k = map(int, input().split())
coins = list()
count = 0

for _ in range(n):
    coins.append(int(input()))

coins.sort(reverse=True)
for coin in coins:
    count += k // coin
    k %= coin

print(count)