package com.tts.threads;

public class SimpleThreads {


    static void threadMessage(String message) {
        String threadName = Thread.currentThread().getName();
        System.out.printf("%s: %s%n", threadName, message);
    }

    public static void main(String[] args) throws InterruptedException {

        // patience is going to be how long we allow each loop to occur before
        // interrupting the thread
        long patience = 1000 * 60 * 60;

        if (args.length > 0) {
            try {
                // our patience is only as long as 3 seconds
                patience = Long.parseLong(args[0]) * 1000;
            } catch (NumberFormatException e) {
                System.err.println("Argument must be an integer");
                System.exit(1);
            }
        }

        threadMessage("Starting MessageLoop thread");
        // variable that is equal to the current time at execution
        long startTime = System.currentTimeMillis();
        // start new thread with SleepMessages runnable
        Thread t = new Thread (new SleepMessages());
        t.start();

        threadMessage("Waiting for messages to finish...");

        // while loop that checks to see if thread is alive
        while (t.isAlive()) {
            threadMessage("still waiting...");
            // the calling thread goes into a waiting state when we invoke .join()
            t.join(1000);
            if ((System.currentTimeMillis() - startTime) > patience &&
            t.isAlive()) {
                threadMessage("Tired of waiting!");
                t.interrupt();
                t.join();
            }
        }
        threadMessage("Finally!");



    }



}
