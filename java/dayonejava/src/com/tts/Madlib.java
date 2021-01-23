package com.tts;

import java.util.Scanner;

// note that class names are always capitalized
public class Madlib {


    public static final int MY_CONST = 400;
    public static final float PI = 3.14f;

// 1.Declare an integer variable "ageLimit" with a value of 18.
// 2.Then declare another variable  "age" that we
//   will use to store the user's age.
// 3.Finally, we'll need to ask the user to input their age.


    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // in a statement, the left hand side is the declaration
        // the right hand side is the initialization

        // 1.
        int ageLimit = 18;

        // 2.
        int userAge;

        // 3.
        System.out.println("Please input your age:");
        userAge = Integer.parseInt(scanner.nextLine());
        System.out.println(userAge);

        // if userAge < ageLimit
        // then warn the user and stop the program
        // else continue the program

        if (userAge < ageLimit) {
            System.out.println("You are too young!!");
            System.exit(0);
        } else {
            System.out.println("Access Granted!");
        }

        System.out.println(Integer.MAX_VALUE);


        scanner.close();

        System.out.println("Program running...");

        int thisIsMyVariable;

        Boolean isBooleanAClass = true;

       if(isBooleanAClass) {
           System.out.println("That is indeed a class!");
       } else {

       }

       if (true) {
           System.out.println("This will always resolve!");
       }
    }
}
