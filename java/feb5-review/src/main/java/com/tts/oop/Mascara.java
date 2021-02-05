package com.tts.oop;

public class Mascara implements Runnable, Appliable {

    @Override
    public void run() {
        System.out.println("My mascara is running!");
    }

    @Override
    public void apply() {
        System.out.println("Mascara was applied!");
    }


}
