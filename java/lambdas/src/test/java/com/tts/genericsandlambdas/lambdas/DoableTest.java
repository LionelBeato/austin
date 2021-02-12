package com.tts.genericsandlambdas.lambdas;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class DoableTest {

    @Test
    void doThing() {

        Doable doer = new Doable() {
            @Override
            public void doThing() {

            }

            @Override
            public void doOtherThing() {

            }

            @Override
            public void doThirdThing() {

            }

            @Override
            public void doFourthThing() {

            }
        };

    }
}