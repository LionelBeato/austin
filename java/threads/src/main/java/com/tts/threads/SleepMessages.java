package com.tts.threads;

public class SleepMessages implements Runnable {

    @Override
    public void run() {


        String importantInfo[] = {
                "Mares eat oats",
                "Does eat oats",
                "Little lambs eat ivy",
                "A kid will eat ivy too"
        };


            for (String message : importantInfo) {
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                    return;
                }
                System.out.println(message);
            }


//        for (String message : importantInfo) {
//            Thread.sleep(5000);
//            System.out.println(message);
//        }
    }
}
