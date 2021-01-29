package com.tts.main.objects;

// what's a pojo?
// it's a Plain Ol' Java Object
// POJOs are important because they are not bound to a framework
// framework is sort of like a dialect or library for Java
// things like Spring for example
public class AnimalPojo {

    // these are fields
    private String name;
    private int amountOfLegs;
    private boolean hasFur;

    // this is my constructor
    public AnimalPojo(String name, int amountOfLegs, boolean hasFur) {
        this.name = name;
        this.amountOfLegs = amountOfLegs;
        this.hasFur = hasFur;
    }



    // these are my getters/setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAmountOfLegs() {
        return amountOfLegs;
    }

    public void setAmountOfLegs(int amountOfLegs) {
        this.amountOfLegs = amountOfLegs;
    }

    public boolean isHasFur() {
        return hasFur;
    }

    public void setHasFur(boolean hasFur) {
        this.hasFur = hasFur;
    }
}
