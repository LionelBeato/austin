package com.tts.threads;

public class HelloRunnable implements Runnable {

    private String message;

    public HelloRunnable(String message) {
        this.message = message;
    }


    @Override
    public void run() {
        System.out.println(message);
    }
}
