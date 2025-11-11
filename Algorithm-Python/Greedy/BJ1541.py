"""
세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.
그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.
괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.
55-50+40
-35
"""

terms = input().split('-')
"""
split
55
50 + 40
"""

for i in range(len(terms) - 1, -1, -1):
    subterms = terms[i].split("+")
    current_sum = 0
    for j in range(len(subterms)):
        current_sum += int(subterms[j])
    terms[i] = current_sum

"""
55
90
"""
result = int(terms[0]) # default
for i in range(len(terms) - 1):
    result = result - int(terms[i + 1])

print(result)