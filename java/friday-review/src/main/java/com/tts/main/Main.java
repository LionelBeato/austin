package com.tts.main;

import com.tts.main.objects.AbstractAnimal;
import com.tts.main.objects.Lamp;
import com.tts.main.objects.Utility;
import com.tts.main.objects.Wolf;

import static com.tts.main.objects.Utility.add;
import java.util.Arrays;

public class Main {

    // recall that the main method is the entry point
    // this is where all java programs will start
    // args is representing the values that we pass into the program when we run it
    // these are known as command line arguments
    public static void main(String[] args) {

//        System.out.println(Arrays.toString(args));
//
//        if (args[0].equals("dogs")) {
//            System.out.println("Showing you pictures of dogs...");
//        } else if (args[0].equals("cats")) {
//            System.out.println("Showing you pictures of cats...");
//        }

        Lamp lampOne = new Lamp();
        Lamp lampTwo = new Lamp();
        Lamp lampThree = new Lamp();
        Lamp lampFour = new Lamp();

        System.out.println(Lamp.getAmountOfTimesCreated());

        // In my main, I want to access the add() method in Utility
        // how do I do this?
        // we would typically create an instance to access this method
        // but why would we when Utility is not representative of an object
//        Utility utility = new Utility();
//        System.out.println(utility.add(3,6));

        // this is the simpler than above
        System.out.println(Utility.add(3,6));

        // you can also import statically
        // this allows you to import the method directly
        // allowing you to omit the reference to the class
        System.out.println(add(3,6));

        // below is a direct example of abstraction
        // we don't care how doCry() works,
        // we just care that it does
        // having it abstract in AbstractAnimal guarantees that it will work
        // this is abstracted from the "user"
        // the user is anybody interfacing with this code
        AbstractAnimal myWolf = new Wolf();
        myWolf.doCry();
        myWolf.setName("Balto");
        System.out.println(myWolf.getName());

    }
}
