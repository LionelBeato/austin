package com.tts.genericsandlambdas.lambdas;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SleepableTest {

    @Test
    void sleepTest() {

        // recall that you can utilize any
        // interface as a type
        //below is Sleepable implemented as
        // an anonymous inner class
        // the Sleepable implementation is NOT NAMED
        // it is only referenced
        Sleepable iPhone = new Sleepable() {

            public String model = "iPhone X";

            @Override
            public void sleep() {
                System.out.println("This iPhone went to sleep.");
            }

            @Override
            public String toString() {
                return "$classname{" +
                        "model='" + model + '\'' +
                        '}';
            }
        };

        Sleepable android = new Sleepable() {

            @Override
            public void sleep() {
                System.out.println("This android went to sleep.");
            }
        };

        iPhone.sleep();
        android.sleep();

    }

    @Test
    void otherTest(){

        // below is a simple arrow/lambda function
        // parans are your arguments
        // curly is your returned value
        // () -> {}
        // below is a simple identity function
        // (x) -> {x}


        Sleepable bear = () -> System.out.println("This bear is hibernating!");
        Sleepable alarmClock = () -> System.out.println("This alarm clock is snoozing...");

        bear.sleep();
        alarmClock.sleep();

    }

}