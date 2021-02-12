package com.tts.genericsandlambdas.interfaces;

// interfaces allow us to define methods
// without implementation
public interface Lookable {

    // this is our abstract method
    // abstract meaning that there's no implementation
    // all methods typically have bodies {}
    // but not abstract ones
    void look();
    void lookAt(String subject);

}
