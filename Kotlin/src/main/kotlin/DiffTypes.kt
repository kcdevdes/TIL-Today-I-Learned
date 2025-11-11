/**
 * Mar 31 2022
 * Control Flow
 */

class DiffTypes {}

// Data class
data class Dataclass(val name: String, val email: String, val age: Int) {
    lateinit var address: String
    constructor(name: String, email: String, age: Int, address: String) : this(name, email, age) {
        this.address = address
    }
}

open class SuperClass{
    open var data = 10
    open fun some() {
    }
}

// object class
val obj = object : SuperClass() {
    override var data = 10
    override fun some() {
        println("data : $data")
    }
}

// main function
fun main() {
    obj.data = 10
    obj.some()
}