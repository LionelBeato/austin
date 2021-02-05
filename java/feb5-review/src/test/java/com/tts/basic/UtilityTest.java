package com.tts.basic;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static com.tts.basic.Utility.*;

class UtilityTest {

    // below is an annotation
    // it tells Java that the method attached is a test
    @Test
    public void sumTest() {
        // below is a static reference to our utility class
        // it doesn't make too much sense to instantiate Utility
        // so we simply refer to the methods statically
        assertEquals(5, sum(2, 3));
    }

}