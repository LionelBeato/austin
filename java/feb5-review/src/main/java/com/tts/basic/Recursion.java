package com.tts.basic;

public class Recursion {


    public static void addOne(int x) {
        // i want to keep adding one to x
        // until x is 10
        // you can do a while loop, or you can do a for loop
        System.out.println(x);
        if (x < 10) {
            addOne(x + 1);
        }
    }

    public static void main(String[] args) {

        addOne(1);

    }

}
