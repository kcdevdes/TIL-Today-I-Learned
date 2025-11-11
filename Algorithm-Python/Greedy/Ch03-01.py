"""
카운터에는 거스름돈으로 사용할 500원 100원 50원 10원 동전이 있다. 손님에게 거슬러 줄 돈이 N원일 때,
거슬러 줘야 할 동전의 최소 개수를 구하라. N은 항상 10의 배수이다.
"""

n = int(input())
count = 0

avail_coins = [500, 100, 50, 10]

for coin in avail_coins:
    count += n // coin
    n %= coin

print(count)