/**
 * March 27, 2022,
 * Collections of Kotlin
 */

fun main(args: Array<String>) {
    listMember()
    mutableMember()
}

fun listMember() {
    val members = listOf("one", "two", "three", "four")
    val setMembers = setOf("one", "one", "two", "three")
    val mapMembers = mapOf<String, Int>("Key1" to 123, "Key2" to 245)

    println(members)
    println(setMembers)
    println(mapMembers)
}

fun mutableMember() {
    val members = mutableListOf("one", "two", "three", "four")
    val setMembers = mutableSetOf("one", "one", "three")
    val mapMembers = hashMapOf<String, Int>("level" to 100, "T" to 200)
    members.add("five")
    setMembers.add("three")
    mapMembers.put("G", 12)

    println(members)
    println(setMembers)
    println(mapMembers)
}
