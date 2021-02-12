package com.tts.genericsandlambdas.generic;

public interface Calculator<T extends Number> {

    public T add(T x, T y);

}
