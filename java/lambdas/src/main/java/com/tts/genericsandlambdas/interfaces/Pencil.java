package com.tts.genericsandlambdas.interfaces;

public class Pencil implements Recordable {

    @Override
    public void record() {
        System.out.println("This pencil is jotting stuff down...");
    }

}
