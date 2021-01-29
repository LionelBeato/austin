package com.tts.main.objects;

// you need to implement abstract methods contractual
public class Wolf extends AbstractAnimal {

    // recall that override means to change method implementation
    // here we are implementing doCry() from our abstract class, Animal
    @Override
    public void doCry() {
        System.out.println("This wolf howled.");
    }


}
