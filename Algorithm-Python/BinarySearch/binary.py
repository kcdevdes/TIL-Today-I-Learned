import random

def binary_search(target, data):
  data.sort() #오름차순
  start = 0
  end = len(data) - 1

  while start <= end:
    mid = (start + end) // 2# 중간값
    
    if data[mid] == target:
      return mid
    elif data[mid] > target:
      end = mid - 1
    else:
      start = mid + 1
  
  return

arr = random.sample(range(1, 100), 10)
targer = arr[0]
result = binary_search(targer, arr)
print(f"찾는 값: {targer}, 배열 값: {arr}")