package com.tts.genericsandlambdas.generic;

import java.util.ArrayList;
import java.util.List;

public class Main implements Returnable<String>{

    @Override
    public String returnArg(String arg) {
        return arg;
    }

    public static void main(String[] args) {

        // the List interface utilizes a type parameter
        // otherwise known as a generic
        // the <> are known as the diamond syntax
        List<Integer> integerList = new ArrayList<>();
        List<String> stringList = new ArrayList<>();

        // since we specified the generic of type <E>
        // we are allowed to pass in integer types
        integerList.add(3);
        // below is illegal because the generic contract was not
        // properly satisfied
//        integerList.add("three");

        Main myMain = new Main();
        System.out.println(myMain.returnArg("I am the argument passed in! Hello from a generic!"));





    }


}
