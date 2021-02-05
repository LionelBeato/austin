package com.tts.oop;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class MugTest {

    @Test
    public void test() {
        // I want to instantiate Mug
        Mug myMug = new Mug("cylinder","large", "ceramic", 8.0f, true);
        Mug myOtherMug = new Mug("cylinder","large", "ceramic", 8.0f, true);
        // Java support polymorphism
        // poly means many
        // morph meaning shapes
        Cup myPolymorphicMug = new Mug("cylinder","large", "ceramic", 8.0f, true);

        // below is an illegal call to a method
        // getMaterial() is ONLY on MUG and not cup
        // we instantiated this variable as type Cup even though we called the Mug constructor
        // myPolymorphicMug.getMaterial();

        // we have a cup list
        // we can still add mugs to it
        List<Cup> cupList = new ArrayList<>();
        cupList.add(myMug);
        System.out.println(cupList);

        List<Mug> mugList = new ArrayList<>();
//        mugList.add(myPolymorphicMug);

        assertTrue(myMug instanceof Cup);
       // assertTrue(myMug.equals(myOtherMug));
        assertEquals(myOtherMug, myMug);
        assertEquals(myPolymorphicMug, myMug);

    }

}