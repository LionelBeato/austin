package com.tts.genericsandlambdas.generic;

// below <T> is where we are defining our generic
// think of <T> has a placeholder for your type
// it can also be called a type parameter

// Note: you cannot use primitives for generics!
public interface Returnable<T> {

    // String returnArg (String arg)
    // Integer returnArg (String arg)
    T returnArg(T arg);

}
