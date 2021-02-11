package com.tts.threads;

public class Main {


    // main is known as our entrypoint
    // but its also described as our main "thread"
    public static void main(String[] args) throws InterruptedException {
        System.out.println("Hello from main!");

        Thread thread1 = new Thread(new HelloRunnable("hi lol"));
        System.out.println("This is my first thread: "+thread1.getName());
        thread1.start();

        // below we are using a lambda for our Runnable
        // this replaces the code above where we need to make a new class that implements Runnable
        Thread thread2 = new Thread(() -> System.out.println("Hello from another thread! Now with lambdas!"));
        thread2.start();


        Counter counter = new Counter();

        Thread threadNum1 = new Thread(() -> {
            counter.decrement();
            counter.decrement();
            // the value of c should now be what?
            // -2
            System.out.println(counter.value());
        });

        Thread threadNum2 = new Thread(() -> counter.decrement());


        threadNum1.start();
        threadNum2.start();


        Thread otherThread = new Thread(() -> System.out.println(counter.value()));
        otherThread.start();



    }



}
