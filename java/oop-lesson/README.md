# OOP Lesson - Thurs, Jan 28 2021


_There are many different philosophies and methodologies developers will employ in order to write their code. Once upon a time, it was more common to see imperative or declarative coding styles that conform to certain paradigms. How developers utilized control flow had to be refined and tinkered with. But how we do best represent real-world concepts programmatically? Or better yet, How do we allow pieces of code to communicate with another?_

_Object-oriented Programming was meant to solve the issue of code communication, but it has expanded to something much grander in scope and is now an entire paradigm itself._

## Object-Oriented Programming

Object-Oriented Programming describes a methodology where a data structure known as an object is used for basic functionality.

These objects will be constructed via a structure known as a class. Classes can be thought of as blueprints for your objects. 

OOP helps us translate and manipulate real-world objects into code in a manageable fashion. 

In a class, it is considered best practice to have all fields set to private. When we want to create a new object from a class, we have to use the following syntax:

```java
MyClass myClass = new MyClass();
```

This is similar to how we typically declare and initialize variables. The first `MyClass` is the type of the variable. The lowercase `myClass` is the variable name or reference. `new` is the keyword utilized to invoke a class' constructor. `MyClass()` is a reference to the constructor itself. 

## The Four Principles

There are four major principles associated with OOP. These principle are critical to understanding OOP and objects in general. They are as follows:

1. _Abstraction_ - this refers to when data access is simplified and obfuscated from a user. Implementation details are essentially hidden from whatever is using abstracted data. We will talk about `abstract` classes and methods that obey this principle. For now, you can think of abstraction as decoupling the implementation of code from where its defined. 
   
    >Take a relative complex system and simplify for our use.
   
2. _Encapsulation_ - this refers to when data is "wrapped" by other code. Programmers do this in order to maintain security and ensure stability. Getters and setters are the go-to example for encapsulation:

      ```java
   
        public class Animal {
   
            private String name;
   
            // constructor
   
            public String getName() {
                return name;
            }    
   
            public String setName(String name) {
                this.name = name;
            }
        }
      
      ```
   
3. _Inheritance_ - code can inherit properties and methods from their parent code. Inheritance allows properties and methods to be defined once and implemented multiple times across many pieces of data.
   
    >The child can do everything the parent can, plus more. 
   
    In Java, we use the keyword `extends` in order to create a parent-child relationship. We add `extends` to the child class like so:

    ```java

    public class Parent {
      // code goes here
   }
   
   public class Child extends Parent {
     // code from Parent
     // more code custom to Child class
   }
    ```
   
4. _Polymorphism_ - this refers to when data can take many forms. Objects can be declared as their superclasses, for example. Observe the following:
    
   ```java
    Parent myChild = new Child();
    ```
   
    In the example above, `myChild` will only have the associated properties of the Parent class despite being initialized as a `Child`. This can be thought of as a form of abstraction since any `Child` specific functionality is completely removed from whatever is operating with the `myChild` instance. In essence, `myChild` is both of type  `Parent` and `Child` at once. 

## Practice

1. Make a class that will serve as a parent in a parent-child relationship. Think of a real world example for this class. For example, `Animal` can be a parent to `Dog`, `Game` can be a parent to `Solitaire`, etc. Give the class at least three private fields. Give it getters and setters and a constructor with the three fields as parameters. 

    ```java
   public class Parent {
    
        // three private fields 
        // constructor
        // getters and setters
   
   }
   ```

2. Make a child class for your parent class and define the parent-child relationship. Remember that the child has utitlize the keyword `extends`. Give the child class at least 2 fields and a unique method. 

    ```java
   
   public class Child extends Parent {
   
        // code goes here 🙂
   
   }

   ```

3. Make one more child class that will extend your first child class! How specific can you get with your children? Can the new child class have unique fields and properties as well? Try to implement unique properties for this child. 

    ```java
   
   public class GrandChild extends Child {
   
        // code goes here 🙂
   
   }

   ```

## Notes

- _Gradle_ is what's known as a _build tool_. It allows for easy configuration, building, code-sharing, and testing. It also provides easy tooling for dev-ops.
- If you find it difficult recalling the four principles, use my mnemonic: ***All Eagles Inherit Plumage***.



## Links 

- [Baeldung: OOP Modeling in the Real World](https://www.baeldung.com/cs/oop-modeling-real-world)
- [Baeldung: Java Classes and Objects](https://www.baeldung.com/cs/oop-modeling-real-world)
- [Oracle Java Tutorial: Object-Oriented Programming Concepts](https://docs.oracle.com/javase/tutorial/java/concepts/index.html)