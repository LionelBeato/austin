package com.tts.genericsandlambdas.interfaces;

// interfaces are a contractual data structure
// wherever you implement them, you need to satisfy the contract
public class Camera implements Lookable, Recordable {

    // below is a concrete method implementation
    // look() was defined abstractly
    // now we give it a proper, concrete implementation
    // meaning that we have a body for the method
    @Override
    public void look() {
        System.out.println("This camera is looking...");
    }

    // Override means that you are changing
    // the implementation of an inherited method
    @Override
    public void lookAt(String subject) {
        System.out.println(
                "This camera is looking at "
                        + subject);
    }

    @Override
    public void record() {
        System.out.println("This camera is recording...");
    }

}
