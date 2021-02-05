package com.tts.oop;

// theres a problem with extending classes to implement methods
// you can only extend one class
public class Candidate extends Runner {

    @Override
    public void run() {
        System.out.println("This candidate is running for Mayor.");
    }


}
