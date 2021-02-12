package com.tts.genericsandlambdas.generic;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CalculatorImplTest {

    @Test
    void addTest(){
        Calculator calculator = new CalculatorImpl();

        assertEquals(calculator.add(3, 5), 8);

    }


}