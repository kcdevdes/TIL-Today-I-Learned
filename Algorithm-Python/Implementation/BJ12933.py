# def solution(s):
#     sound_filter = ("q", "u", "a", "c", "k")
#     duck_list = [[]]
#     for chr in s:
#         if len(duck_list[-1]) == 0 and chr == "q":
#             duck_list[-1].append(chr)
#         elif chr == "q":  # when the list is not empty and q get caught again
#             for sublist in duck_list:
#                 if len(sublist) >= 5 and sublist[-1] == "k":  # one duck finishes crying -> you can add one more crying.
#                     sublist.append(chr)
#                     break
#             duck_list.append([chr])
#         else:
#             invalid = True
#             for sublist in duck_list[::-1]:
#                 if chr == sound_filter[len(sublist) % 5]:
#                     sublist.append(chr)
#                     invalid = False
#                     break
#             if invalid:
#                 return -1
#
#     count = 0
#     for i in range(len(duck_list)):
#         if is_list_made_of_substring(duck_list[i], ["q", "u", "a", "c", "k"]):
#             count += 1
#
#     return count if count > 0 else -1
#
#
# def is_list_made_of_substring(main_list, substring):
#     if len(main_list) % len(substring) != 0:
#         return False
#     repetitions = len(main_list) // len(substring)
#     return main_list == substring * repetitions
#
#
# print(solution(input()))

s = list(input())
answer = 0

if s[0] != "q" or s[-1] != "k" or len(s) % 5:
    print(-1)
    exit()

def solution(start):
    quack = "quack"
    j = 0
    global answer
    new = True
    for i in range(start, len(s)):
        if s[i] == quack[j]:
            if s[i] == "k":
                if new:
                    answer += 1
                    new = False
                j = 0
                s[i] = 0
                continue
            j += 1
            s[i] = 0

for i in range(len(s) - 4):
    if s[i] == "q":
        solution(i)

if any(s) or answer == 0:
    print(-1)
else:
    print(answer)

