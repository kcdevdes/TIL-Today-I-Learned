import random
import time

def is_sorted(arr):
  for i in range(1, len(arr)):
    if arr[i - 1] > arr[i]:
      return False
  return True

def bogo_sort(N):
  start_time = time.perf_counter()

  arr = [i for i in range(N)]
  random.shuffle(arr)
  while not is_sorted(arr):
    random.shuffle(arr)

  end_time = time.perf_counter()
  elapsed_time = end_time - start_time
  print("Sorted! " + str(arr))
  print(f"Elapsed time: {elapsed_time} seconds")

bogo_sort(15)