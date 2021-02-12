package com.tts.genericsandlambdas.generic;

public class CalculatorImpl implements Calculator<Integer> {

    @Override
    public Integer add(Integer x, Integer y) {
        return x + y;
    }
}
