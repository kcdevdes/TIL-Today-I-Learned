/**
 * Apr 01 2022
 * Control Flow
 */

typealias MyFunType = (Int, Int) -> Boolean

fun main() {
    val some = {no: Int -> println(no)}
    some(10)

    val some2: (Int) -> Unit = {println(it)}
    some(10)

    val some3 = {no1: Int, no2: Int ->
        println("in lambda function")
        no1 * no2 // return value
    }
    println(some3(10, 20))

    val some4 : (Int, Int) -> Int = {no1: Int, no2: Int -> no1 + no2}
    println(some4(10, 20))

    val some5 : MyFunType = { no1, no2 -> no1 > no2}
    println(some5(10, 20))

    val some6 = hofFun { no -> no > 0 }
    println(some6())
}

fun hofFun(arg: (Int) -> Boolean) : () -> String { // return a type of function
    val result = if (arg(10)) {
        "valid"
    } else {
        "invalid"
    }

    return {"hotFun result: $result"}
}