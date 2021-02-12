package com.tts.genericsandlambdas.lambdas;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static com.tts.genericsandlambdas.lambdas.Stream.integers;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class StreamTest {

    @BeforeEach
    void setUp() {
        integers.add(453);
        integers.add(321);
        integers.add(3321);
        integers.add(7689);
    }

    @Test
    void test() {

        for (Integer integer : integers) {
            System.out.println(integer);
        }

        // below is a call to a higher order function
        // this means that it takes in a function as an argument
        // the function is forEach()
        integers.forEach((integer) -> System.out.println(integer));

        Integer expected = 453;

        // below is an example of method chaining
        // we open up a stream of data with .stream()
        // then we find the first value in that stream
        // with .findFirst() and wrap in an Optional Object
        // Optional is whats known as a monad
        // monads are wrappers for values
        Integer actual = integers.stream()
                .findFirst() // finds first value as Optional
                .orElseThrow(); // return value in Optional OR throw exception

        assertEquals(expected, actual);
    }

    @Test
    void filterTest() {
        integers.stream()
                .filter((integer) -> integer < 5000)
                .forEach((integer) -> System.out.println(integer));
    }

    @Test
    void reduceTest() {
        integers.stream()
                .map(integer -> integer * 2)
                .forEach((integer) -> System.out.println(integer));

//        integers.stream()
//                .map(integer -> integer * integer)
//                .forEach((integer) -> System.out.println(integer));

        int expected = 11_784;
        int actual = integers.stream()
                .reduce(0, (subtotal, element) -> subtotal + element);

        assertEquals(expected, actual);
    }

    @Test
    void lastTest(){

        //integers.forEach((integer) -> System.out.println(integer));
        integers.forEach(System.out::println);

    }

    @AfterEach
    void tearDown() {
        integers.clear();
    }


}
