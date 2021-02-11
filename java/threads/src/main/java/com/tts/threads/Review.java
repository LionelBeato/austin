package com.tts.threads;

public class Review {

    public static void main(String[] args) throws InterruptedException {

        Runnable runnable = () -> {
            try {
                String threadName = Thread.currentThread().getName();
                Thread.sleep(2000);
                System.out.printf("Hello from a thread! Thread name: %s\n", threadName);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

        };

        Thread thread = new Thread(runnable);
        Thread threadTwo = new Thread(runnable);
        Thread threadThree = new Thread(runnable);

        thread.start();
        // when we call .join(), Thread-0 will always resolve first
        thread.join();
        threadTwo.start();
        threadThree.start();

    }

}
