/**
 * Mar 26 2022
 * Kotlin Number Types
 */

fun main(args: Array<String>) {
    printNumTypes()
    printCharTypes()
    printStrType()
    printArrayType()
}

fun printNumTypes() {
    val a: Int = 1000
    val d: Double = 1000.0
    val f: Float = 1000.0f
    val l: Long = 10000000000005
    val s: Short = 10
    val b: Byte = 1

    println("Int value is $a")
    println("Int value is $d")
    println("Int value is $f")
    println("Int value is $l")
    println("Int value is $s")
    println("Int value is $b")
}

fun printCharTypes() {
    val letter: Char = 'A'

    println("$letter")

    println('\n') // newline
    println('\$') // dollar symbol
    println('\\') // back slash symbol
}

fun printStrType() {
    val escapedString: String = "I am escaped String! \n"
    var rawString: String = """
        multiline string 
        cannot have any escape sequence
    """

    print(escapedString)
    println(rawString)
}

fun printArrayType() {
    val numbers: IntArray = intArrayOf(1, 2, 3, 4, 5)

    println("value of 3rd index : " + numbers[2])
}
