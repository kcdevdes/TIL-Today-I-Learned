/**
 * March 28, 2022,
 * List
 */

fun main() {
    createList()
    createHorizontalRule()
    manipulateLists()
    createHorizontalRule()
    createMutableList()
    createHorizontalRule()
    manipulateMutableList()
}

fun createHorizontalRule() {
    println("-----------------------------------")
}

fun createList() {
    val theList = listOf("one", "two", "three")

    // looping
    val itr = theList.listIterator()
    while (itr.hasNext()) {
        println(itr.next())
    }

    for (i in theList.indices) {
        println(theList[i])
    }

    theList.forEach { println(it) }
}

fun manipulateLists() {
    val firstList = listOf("one", "two", "three")
    val secondList = listOf("one", "two", "three", "four", null)

    println(firstList + secondList)
    println(secondList - firstList)

    println(firstList.slice(1..2))
    println(secondList.filterNotNull())

    val theList = listOf(10, 20, 30, 31, 40, 50, -1, 0)
    println(theList.filter { it > 30 })

    println(theList.drop(3))
    println(theList.groupBy { it % 3 })
    println(theList.chunked(3))
    println(theList.windowed(3))
}

fun createMutableList() {
    val list = mutableListOf("one", "two", "three", "four")

    list.forEach { println(it) }
}

fun manipulateMutableList() {
    val list = mutableListOf("one", "two", "three", "four")

    list.add("six")
    list.remove("one")

    val itr = list.listIterator()
    while (itr.hasNext()) {
        println(itr.next())
    }
}
