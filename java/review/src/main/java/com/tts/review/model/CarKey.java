package com.tts.review.model;

// this is my model for the object CarKey
// recall that all classes are extending Object
public class CarKey {

    // some keys are wireless
    // a possible field is color
    // another field is material

    // now we make our fields
    private String color;

    // our field needs getters and setters since its private

    public void setColor(String color) {
        // here we databind the parameter to the field
        this.color = color;
    }

    public String getColor() {
        return color;
    }

    // this is a default/noargs constructor
    public CarKey() {

    }

    public CarKey(String color) {
        this.color = color;
    }

}
