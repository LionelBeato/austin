package com.tts.threads;

public class HelloThread extends Thread {

    @Override
    public void run() {
        System.out.println("Hello from an instance of Thread via a class!");
    }

    public static void main(String[] args) {
        // wrapping a constructor call with parentheses will allow you to invoke methods on it
        (new HelloThread()).start();


    }
}
