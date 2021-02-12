package com.tts.genericsandlambdas.interfaces;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CameraTest {
    
    @Test
    void lookTest() {
        Camera camera = new Camera();
        camera.look();
    }

}