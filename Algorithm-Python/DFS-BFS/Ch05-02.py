from collections import deque

queue = deque()

queue.append(5)
queue.append(4)
queue.append(3)
queue.append(6)
queue.append(7)
queue.append(2)

print(queue.popleft())
print(queue.popleft())
print(queue)
queue.reverse()
print(queue)