package com.tts.review;

import com.tts.review.model.CarKey;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;
import java.util.Vector;

// this class will have my entry point
public class Application {

    // the main method is your entry point
    // its where the jvm will the start the code
    public static void main(String[] args) {
        System.out.println("Hello world.");
        // int is your type
        // x is the variable name/reference
        // 500 is the value (sometimes referred to as the literal)
        int x = 500;

        // here I am making an instance of CarKey
        // I need to invoke CarKey's constructor
        CarKey carKey = new CarKey("red");
//        carKey.setColor("green");

        System.out.println(carKey.getColor());

        // below is an example of polymorphism
        // we declare carKey1 as an Object
        // we instantiate carkey1 as a CarKey
        Object carKey1 = new CarKey();

        List<CarKey> carKeyList = new Stack<>();
        List<CarKey> carKeyList2 = new ArrayList<>();
        List<CarKey> carKeyList3 = new Vector<>();

    }
}
