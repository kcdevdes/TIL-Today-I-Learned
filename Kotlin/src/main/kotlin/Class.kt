/**
* Mar 29 2022
* Kotlin Class and Constructor
 * */

class Class (name: String, age: Int) {
    val name : String
    val age : Int

    init {
        this.name = name
        this.age = age
    }

    fun printOut() {
        println("${this.name} is ${this.age} years old")
    }
}

class Class2 {
    val name: String
    val age: Int

    constructor(name : String, age: Int) {
        this.name = name
        this.age = age
    }

    fun printOut() {
        println("${this.name} is ${this.age} years old")
    }
}

class Class3(name: String) {
    constructor(name: String, count: Int) : this(name) {
        println("$name => $count")
    }
}

open class Super(open val name: String) {
    open fun someFun() {
        println("I am $name")
    }
}

class Sub(override val name: String, val count: Int) : Super(name) {
    override fun someFun() {
        println("I am $name and $count years old")
    }
}

fun main(args: Array<String>) {
    val c1 = Class("Kevin", 23)
    val c2 = Class2("Anthony", 20)

    c1.printOut()
    c2.printOut()

    val c3 = Class3("My Name", 10)
    val c4 = Sub("Kevin", 10)
    c4.someFun()
}