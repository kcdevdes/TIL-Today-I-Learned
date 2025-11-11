fun main(args: Array<String>) {
    val data: String? = null
    println("data length : ${data?.length ?:0}")

    println("print null : ${data?.length}")
    println("print NullPointerException : ${data!!.length}")
}