package com.tts.basic;

// What is a class in Java?
// essentially, a class is a blueprint for
// objects with properties (fields and methods)
// However, a class is literally just a grouping of data
public class Main {

    // what is a field?
    // a value associated with a class referenced by a variable
    // int is a primitive, a fundamental representation of a data
    // in a language. myNumber is the reference or "name" of the variable
    public int myNumber = 5;

    // i can change this private field at construction time
    private String hello;

    // below is a constructor that will allow you
    // to change the properties of instances,
    // an empty constructor is known as a default constructor
    public Main(String hello) {
        this.hello = hello;
    }

    // what is a method?
    // methods are your functions on objects
    // they are representative of actions and things that can be done in
    // your code
    public void printHello() {
        System.out.printf("%s", hello);
    }

    public static void printStaticHello() {
        System.out.println("Hello from a static method!");
    }

    // main methods are also as main threads
    // you can think of threads as a series of actions
    // its also known as the main entry point
    // you can have multiple main methods in your project
    public static void main(String[] args) {

        // below is the construction of an object
        // new Main() is a reference to the object's constructor
        // a constructor is not explicitly declared but it still works
        // every class has an implicit constructor
        // myInstance has a type of Main
        Main myInstance = new Main("Hey there!\n");
        Main myOtherInstance = new Main("Hey, what's up?\n");

        // these two methods are the same reference
        // but they perform different actions
        myInstance.printHello();
        myOtherInstance.printHello();

        // below is a static reference to a static
        // Main is reference to the actual class
        // you would use static for "Utility"
        // classes
        Main.printStaticHello();

        // whenever your references are italicised
        // that means that it is static

        Days myDay = Days.FRIDAY;

        switch(myDay) {
            case FRIDAY -> System.out.println(myDay.getS());
            case SATURDAY -> System.out.println(myDay.getS());
        }

    }



}
