package com.tts.genericsandlambdas.interfaces;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class WiggleableTest {

    @Test
    void wiggleTest() {

//        Wiggleable jello = () -> {
//            return "this jello is wiggling";
//        };

        // when you have a parameter you don't need to specify the type
//        Wiggleable jello = (name) -> "this "+ name  + " is wiggling";
//        Wiggleable jello = name -> "this "+ name  + " is wiggling";
        Wiggleable jello = name -> {
            String color = "red";
            // if you have body for your lambda
            // you need to have an explicit return
            return "this "+ color + " " + name  + " is wiggling";
        };

        String expected = "this red jello is wiggling";
        String actual = jello.wiggle("jello");
        assertEquals(expected, actual);
    }
}