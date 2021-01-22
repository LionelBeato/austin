package com.tts;
import java.util.*;

public class Second {

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
        int bigInt = 2147483647;
        System.out.println(bigInt);


    }

}
