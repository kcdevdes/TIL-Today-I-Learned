> edited on March 28, 2022

# List

- A Kotlin List can be either mutable or immutable.
- A kotlin list can have duplicate elements.
- An immutable list is created by `listOf()` funciton
- A mutable list is created by `mutableListOf()` function

```kotlin
fun main() {
    val theList = listOf("one", "two", "three", "four")
    println(theList)

    val theMutableList = mutableListOf("one", "two", "three", "four")
    println(theMutableList)
}
```

## loop through Kotlin lists
1. using `toString()`
2. using iterators
3. using `for` loop
4. using `forEach`

```kotlin
fun main() {

    // using toString()
    val theList = listOf("one", "two", "three", "four")
    println(theList.toString())

    // using iterator
    val itr = theList.listIterator()
    while (itr.hasNext()) {
        println(itr.next())
    }
    
    // using for loop
    for (i in theList.indices) {
        println(theList[i])
    }
    
    // using forEach
    theList.forEach { println(it) } // `it` works like this in Java/
}
```

## size of lists
- `size` property returns the size of the list.
```kotlin
println("size of theList : " + theList.size)
```

## The `in` operator
- The in operator can be used to check the existence of an element in a list.
```if ("two" in theList) // true... ```
 
## The 'contain()' method
The contain() method can also be used to check the existence of an element in a list.
```kotlin
fun main() {
   val theList = listOf("one", "two", "three", "four")

   if(theList.contains("two")){
      println(true)
   }else{
      println(false)
   }
    
}
```

## The `isEmpty()` method
- The isEmpty() method returns true if the collection is empty (contains no elements), false otherwise.

```kotlin
fun main() {
   val theList = listOf("one", "two", "three", "four")
    
   if(theList.isEmpty()){
      println(true)
   }else{
      println(false)
   }
}
```

## The `indexOf()` method
- The indexOf() method returns the index of the first occurrence of the specified element in the list, or -1 if the specified element is not contained in the list.

```kotlin
fun main() {
   val theList = listOf("one", "two", "three", "four")
    
   println("Index of 'two' :  " + theList.indexOf("two"))
}
```

## Manipulating Lists

```kotlin
fun main() {
    // list addition
    val firstList = listOf("one", "two", "three")
    val secondList = listOf("four", "five", "six")
    val resultList = firstList + secondList
    
    // list subtraction
    val firstList = listOf("one", "two", "three")
    val secondList = listOf("one", "five", "six")
    val resultList = firstList - secondList
    
    // slicing lists
    val theList = listOf("one", "two", "three", "four", "five")
    val resultList = theList.slice( 2..4)
    
    // removing null properties from lists
    val theList = listOf("one", "two", null, "four", "five")
    val resultList = theList.filterNotNull()
    
    // filtering lists
    val theList = listOf(10, 20, 30, 31, 40, 50, -1, 0)
    val resultList = theList.filter{ it > 30}
    
    // dropping first n elements
    val theList = listOf(10, 20, 30, 31, 40, 50, -1, 0)
    val resultList = theList.drop(3) // first N elements will be dropped (10 - 30)
    
    // grouping list elements
    val theList = listOf(10, 12, 30, 31, 40, 9, -3, 0)
    val resultList = theList.groupBy{ it % 3}
    // {1=[10, 31, 40], 0=[12, 30, 9, -3, 0]}
    
    // mapping lists
    val theList = listOf(10, 12, 30, 31, 40, 9, -3, 0)
    val resultList = theList.map{ it / 3 }
    // [3, 4, 10, 10, 13, 3, -1, 0]
    
    // chucking lists
    val theList = listOf(10, 12, 30, 31, 40, 9, -3, 0)
    val resultList = theList.chunked(3) // create chucks of the given size from the list
    // last chuck may not have the elements equal to the number of the size
    [[10, 12, 30], [31, 40, 9], [-3, 0]]
    
    // windowing lists
    // We can use windowed() method to a list of element ranges 
    // by moving a sliding window of a given size over a collection of elements.
    val theList = listOf(10, 12, 30, 31, 40, 9, -3, 0)
    val resultList = theList.windowed(3)
    // [[10, 12, 30], [12, 30, 31], [30, 31, 40], [31, 40, 9], [40, 9, -3], [9, -3, 0]]
}
```

## Mutable lists
- You can create mutable lists with `mutableListOf()` function.
- Later you can use `add()` to add more elements in the same list
- you can use `remove()` method to remove the elements from the list.
