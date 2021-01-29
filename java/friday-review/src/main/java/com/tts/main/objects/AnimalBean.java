package com.tts.main.objects;
import java.io.Serializable;

// javabean
// a bean is a POJO more or less that can be serialized
// typically, it will "implement" an "interface" called Serializable
// serialization within will allow objects to be interpreted and handled as a byte stream (stream of 1's and 0's)
public class AnimalBean implements Serializable {

    // these are fields
    private static final long serialVersionUID =  -3760445487636086034L;
    private String name;
    private int amountOfLegs;
    private boolean hasFur;

    // this is my constructor
    public AnimalBean(String name, int amountOfLegs, boolean hasFur) {
        this.name = name;
        this.amountOfLegs = amountOfLegs;
        this.hasFur = hasFur;
    }

    // default constructors are need for beans
    public AnimalBean() {

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
