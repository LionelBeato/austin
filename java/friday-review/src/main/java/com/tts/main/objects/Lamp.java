package com.tts.main.objects;
import java.util.Arrays;

public class Lamp {

    // this field only has a getter
    // notice that this field is static
    // this is going to be tracking the amount of instances created from Lamp
    // this variable is the same across all instances of Lamp
    // in essence, it is "owned" by the class as opposed to an instance
    // as such it can be referred to by its Class as well

    //"So static make the field or method relate to the class itself…
    // not the instance" - Karson Krieg
    private static int amountOfTimesCreated = 0;

    // this is a getter for amountOfTimesCreated
    public static int getAmountOfTimesCreated() {
        return amountOfTimesCreated;
    }

    // recall that constructors are not methods
    // the reason being is because they do not have a return value
    public Lamp() {
        amountOfTimesCreated++;
    }

//    public void setAmountOfTimeCreated(int amountOfTimesCreated){
//        this.amountOfTimesCreated = amountOfTimesCreated;
//    }


}
