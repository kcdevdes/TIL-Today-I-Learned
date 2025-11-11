/**
 * Mar 26 2022
 * Control Flow
 */

fun main() {
    ifElse()
    whenFlow()
    forFlow()
}

fun ifElse() {
    val age = 19

    if (age >= 20) {
        println("Adult")
    } else {
        println("Teenager")
    }

    val age2 = if (age >= 20) {
        "Adult"
    } else {
        "Teenager"
    }

    println(age2)

    val age3 = if (age >= 20) "Adult" else "Teenager"
    println(age3)
}

fun whenFlow() {
    val day = 2

    val result = when(day) {
        1,2,3, 4, 5 -> "Weekday"
        else -> "Weekend"
    }

    println(result)
}

fun forFlow() {
    val fruits = arrayOf("banana", "apple", "grape", "strawberry")

    for (i in fruits) {
        println(i)
    }

//    for ( i in 1..100) {
//        println(i)
//    }
//    for (i in 100 downTo 1 step 2) {
//        println(i)
//    }
}
