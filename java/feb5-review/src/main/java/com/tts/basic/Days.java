package com.tts.basic;

// enums can be thought of as a collection of constants
// a constant is a variable that doesn't change
public enum Days {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY("Today is friday! Wooo!"),
    SATURDAY ("Time to party!!! Hooray!!"),
    SUNDAY;

    private String s;

    Days(String s) {
        this.s  = s;
    }

    Days() {

    }

    public String getS() {
        return s;
    }
}
