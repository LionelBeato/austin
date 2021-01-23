package com.tts;

// this is a single line comment


/*
*
* This is a multi-line comment!
* Ain't this super-duper!
*
* */

// public is an access modifier
// it determines data access

// below is a class definition, or simply a "class"
// it is the blueprint for objects in Java
// everything in Java is in a class
// classes can also be thought of as programmer-defined types
public class Main {

    // variables can be declared on the same line
    // but its not considered best practice
    private int x, y, z;

//    private static class Inner {
//
//        public void printStatement() {
//            System.out.println("Hello from an inner class!");
//        }
//
//    }

    // this variable is private! Other classes can't access it!
    // static means you can call this data directly from the class
    // this means you do not have to create an instance
    private static int myInt = 4;

    // the syntax for variables is as follows:
    // type variableName/reference = value
    public int myOtherInt = 5;
    public float myFloat;
    public double myDouble;
    public long myLong;
    public String myString;
    public boolean myBool;
    public char myChar;
    public byte myByte;



    // this is my main method
    // this serves as my "entry point"
    // my intrepreter will look for this method to have access to my program
    // void is the return type
    // void means that this method does not return anything meaningful
    // but it does indeed return void as a "thing"
    public static void main(String[] args) {

        // this variable does not have an access modifier(public/private)
        // this variable is already public due to it being inside of the main method
        // however, this is locally scoped so it only exists inside of the main method
        // don't give access modifiers to local variables
        int y = 5;

        // System.out.println() is referring to a function
        // these functions are going to be referred to as methods going forward
        // strictly speaking, methods are functions that live on objects
        // this method is similar to console.log in javascript!
        System.out.println("Hello world");


        // typing sout will autocomplete a system out
        System.out.println(myInt);

        // below is a practice known as concatenation
        // it allows you to interpret values and multiple strings
        System.out.println("Here is the value of myInt " + myInt);

        // here we are creating an instance
        // Main() is calling the constructor which gives us a new instance
        Main myMain = new Main();
        System.out.println(myMain.myOtherInt);

        // \n is an expression for newline
        // it is known as an escape character
        System.out.print("I am in a simply print method");
        System.out.print("I am in a simply print method\n");

        // this is similar to javascript template literals ${}
        // it allows you be more expressive and neat with your print outs
        System.out.printf("I am in a formatted print method\n");
        System.out.printf("I am in a formatted print method " +
                "and here is the value of myInt:%d\n%d %d %d %d %d", myInt, 1, 2, 3, 4, 5);

//        Inner myInner = new Inner();
//        myInner.printStatement();
    }

}
