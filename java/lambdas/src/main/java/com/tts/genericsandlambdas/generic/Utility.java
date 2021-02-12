package com.tts.genericsandlambdas.generic;

public class Utility<T, R> {

    public T returnT(T arg) {
        return arg;
    }

    public R returnR(R arg) {
        return arg;
    }

    public static void main(String[] args) {
        Utility<String, Integer> utility = new Utility<>();

        System.out.println(utility.returnT("This aligns with the generic T"));
        System.out.println(utility.returnR(12));


    }

}
