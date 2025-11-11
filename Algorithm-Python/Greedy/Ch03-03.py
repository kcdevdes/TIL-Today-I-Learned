"""
숫자가 쓰인 카드들이 N * M의 형태를 띈다. N은 행의 개수, M은 열의 개수
먼저 뽑고자 하는 카드가 포함되어 있는 행을 선택한다.
그 다음 선택된 행에 포함된 카드들 중 가장 숫자가 낮은 카드를 뽑아야 한다.
따라서 처음에 카드를 골라낼 행을 선택할 때, 이후에 해당 행에서 가장 숫자가 낮은 카드를 뽑을 것을 고려하여
최종적으로 가장 높은 숫자의 카드를 뽑을 수 있도록 전략을 세워야한다.
"""

"""
3 3 
3 1 2
4 1 4
2 2 2

=> 2

2 4
7 3 1 8
3 3 3 4
=> 3
"""

n, m = map(int, input().split())
cards = []
for _ in range(n):
    cards.append(list(map(int, input().split())))

number = -1
for i in range(n):
    # cards[i].sort()
    # number = max(cards[i][0], number)

    # 더 간결
    number = max(min(cards[i]), number)

print(number)