"""
어떠한 수 N이 1이 될 때 까지 다음의 두 과정 중 하나를 반복적으로 선택하여 수행하려고 한다.
1. N에서 1을 뺀다.
2. N을 K로 나눈다.

N과 K가 주어질 때 N이 1이 될 때 까지 1번 혹은 2번의 과정을 수행해야 하는 최소 횟수를 구하는 프로그램을 작성하시오.
"""

"""
25 5
=> 2
"""

n, k = map(int, input().split())

result = 0
while n != 1:
    target = (n // k) * k
    result += (n - target)
    n =  target
    if n < k:
        break
    result += 1
    n //= k

result += (n - 1)
print(result)
