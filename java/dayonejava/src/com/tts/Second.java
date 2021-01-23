package com.tts;
import java.util.*;

public class Second {

    // any variables on the class level are fields
    // these can have access modifiers
    public int myField;

    public static void main(String[] args) {

        // in order to use a scanner you need to construct an instance
        // this instance accepts a variable referred to as System.in
//        Scanner input = new Scanner(System.in);
//        System.out.println("Input your first name:");
//        String myName = input.nextLine();
//
//        System.out.printf("Here is your name: %s", myName);
//
//        input.close();

        // primitives are pieces of data and values that cannot be altered/redefined
        // primitives can be thought of as "atomic"
        // int would be the primitive
        // within intellij primitives will be a different color to references
        int myInt = 4;

        // references are the inverse of primitives in a lot of ways
        // they are a collection of values and data that can be referred to as one "thing"
        // Integer is implemented a class with fields and methods and values
        Integer myOtherInt = 5;

        // note that char literals are going to be interpreted by single quotes
        char myChar = 'L';

        //
        long myLong = 200L;
        // in order to make large values readable you can indeed utilize underscores
        // underscores are going to be ignored by the compiler
        int bigInt = 2_147_483_647;
        float myFloat = 1.34533f;
        double myDouble = 2.3434d;

        int myCast = (byte) 57;

        System.out.println(bigInt);

        // note that you can "cast" in Java
        // this allows you force types on variables once it hits the compiler
        float pleaseRoundMeDownTwo = (int) 3.3432f;
        System.out.println(pleaseRoundMeDownTwo);

        float pleaseRoundMeDown = 3.3432f;
        System.out.println((int) pleaseRoundMeDown);

        int myNumber = 9;
        int remainder = myNumber % 2;

        if (remainder == 0) {
            System.out.println("myNumber is even!");
        } else {
            System.out.println("myNumber is odd!");
        }

//        System.out.println(remainder);

        System.out.println(myNumber);
        System.out.println(++myNumber);

        // note that post increments resolve after evaluation
        // such as the end of a loop
        for (int i = 0; i < 2; i++) {
            System.out.println(i);
            System.out.println(myNumber++);
        }

        int x = 1;
        int y = 2;

        // x = x + y;
        // x += y;
//      System.out.println(x);


        /*
        *
        * It's good to write out psuedo code first
        * especially when it comes to complicated logic
        * such as conditionals.
        *
        * Start it off as simple, plain english, move on to
        * psuedo-code, and then attempt to implement the code
        *
        * */

        // i want to print "hello there" if x equal 1 and y equals 2
        // if x == 1 and y == 2, then print "hello there"

        if (x == 1  && y == 2) {
            System.out.println("hello there!");
        }

        // if user's age is 13 and they're in a legal location, then allow access
        // if user.age >= 13 && user.isLocationLegal == true, user.allowAccess
        // else print out "you cant do that!"


        // here are two ways to declare strings!
        String myString = new String("Hello");
        String otherString = "Hello";
        System.out.println(myString.length());



    }
}
