package com.tts.main.objects;


// class can be abstract
// this means they cannot be instantiated
// it also means that they can have abstract methods
public abstract class AbstractAnimal {

    // abstract classes can have concrete implementations
    private String name;

    // both my getter and setter are concrete and usable as is
    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }

    // this method is abstract
    // there is no implementation
    // below is just a definition
    public abstract void doCry();


}
