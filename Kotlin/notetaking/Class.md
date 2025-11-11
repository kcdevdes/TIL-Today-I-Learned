# Declaration of Class

We can declare Kotlin classes by using `class` keyword.

```kotlin
class User{}
```

A Kotlin class may contain a constructor, variable, function, and class.

## Constructor
```kotlin
class User {
    var name = "kevin"
    
    // constructor
    constructor(name: String) {
        this.name = name
    }
    
    fun someFun() {
        println("name" + this.name)
    }
    
    class SomeClass {}
}
```

In Kotlin, we don't use `new` to create a new object.
Instead, we use the name of the class and initial arguments.

```kotlin
val user = User("Kim")
user.someFun()
```

## Primary Constructor
A Kotlin class has two types of constructors, one is a primary constructor, other is a secondary constructor.
```kotlin
// primary constructor 1
class User constructor() {
    
}

// primary constructor 2
class User () {
    
}

// no constuctor 
class User {
    
}

// init keyword and a constuctor 
class User(name: String, count: Int) {
    init {
        println()
    }
    
    fun someFun() {}
}
```

## How to use the parameters in the constructor as member variables
Fundamentally, the parameters in the constructor can only be used in the constructor and `init{}`
To allow other methods to use these parameters, we use `this` keyword to access the parameters
```kotlin
class User(name: String, count: Int) {
    var name: String
    var count: Int
    
    init {
        this.name = name
        this.count = count
    }
    
    fun someFun() {
        println("$name + $count") // now available!
    }
}
```

Or like, we use `val` or `var` keywords to access the parameters directly.

```kotlin
class User(val name: String, val count: Int) {
    fun someFun() {
        println("Name : $name + Count : $count")
    }
}
```

Functions cannot use `val` and `var` as keywords in the field of parameters
However, only primary constructors can declarer those types of parameters.

### Secondary Constructor
We can make a couple of constructors in a class

```kotlin
class User {
    constructor(name: String) {
    }
    
    constructor(name: String, count: Int) {
    }
}
```

By the way, when we declare a primary constructor and a secondary constructor together,
we need to link the secondary constructor to the primary constructor

```kotlin
class User(name: String) {
    constructor(name: String, count: Int) : this(name) { // this(name) is necessary!
    }
}
```

## Inheritance
We can add a keyword `:` to refer to superclass when we declare a class (subclass)
```kotlin
open class Super{}
class Sub: Super() {}
```

If a superclass has parameters, then subclasses must declare following parameters.
```kotlin
open class Super (name: String) {}
class Sub (name: String): Super(name) {}
```

