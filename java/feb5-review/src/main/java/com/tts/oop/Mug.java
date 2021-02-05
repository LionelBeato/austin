package com.tts.oop;

import java.util.Objects;

// Mug is a child class of Cup
public class Mug extends Cup {

    // below are our instance fields
    // variables are typically harder to test as opposed to behaviors
    // and they can be easily manipulated or mutated

    // material
    private String material;
    // volume
    private float volumeInOunces;
    // boolean hasHandle
    private boolean hasHandle;

    // constructors
    // you can have as many constructors as possible
    public Mug() {
        super();
    }

    public Mug(String material) {
        super();
        this.material = material;
    }

    public Mug(String shape, String size, String material, float volumeInOunces, boolean hasHandle) {
        super(shape, size, true);
        this.material = material;
        this.volumeInOunces = volumeInOunces;
        this.hasHandle = hasHandle;
    }

    // getters and setters are a design pattern
    // they are not native to the language
    public String getMaterial() {
        return this.material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }


    // what does it mean to override?
    // you are changing the implementation of any given inherited method
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Mug mug = (Mug) o;
        return Float.compare(mug.volumeInOunces, volumeInOunces) == 0 && hasHandle == mug.hasHandle && material.equals(mug.material);
    }

    @Override
    public int hashCode() {
        return Objects.hash(material, volumeInOunces, hasHandle);
    }

    @Override
    public String toString() {
        return "Mug{" +
                "material='" + material + '\'' +
                ", volumeInOunces=" + volumeInOunces +
                ", hasHandle=" + hasHandle +
                '}';
    }
}
