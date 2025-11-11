
# input n = 배열의 크기, m = 숫자가 더해지는 횟수, k = 최대 덧셈 수
n, m, k = map(int, input().split())
data = list(map(int, input().split()))

"""
7 // 4 = 1
7 % 3 = 3
1 1 1 2 1 1 1
"""

data.sort(reverse=True)
result = (m // (k + 1)) * k * data[0]
result += (m // (k + 1)) * data[1]
result += (m % (k + 1)) * data[0]
print(result)
