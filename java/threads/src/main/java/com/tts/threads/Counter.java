package com.tts.threads;

public class Counter {

    private int c = 0;

    public  void  increment() {
        c++;
    }

    public  void decrement() {
        c--;
    }

    public synchronized int value() {
        return c;
    }

}
