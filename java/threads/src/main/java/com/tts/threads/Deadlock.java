package com.tts.threads;

public class Deadlock {

    static class Friend {
        private final String name;

        public String getName() {
            return name;
        }

        Friend(String name) {
            this.name = name;
        }

        public synchronized void bow(Friend bower) {
            System.out.format("%s: %s has bowed to me! \n",
                    this.name,
                    bower.getName());
            bower.bowBack(this);
        }

        public synchronized void bowBack(Friend bower) {
            System.out.format("%s: %s has bowed back to me! \n",
                    this.name,
                    bower.getName());
        }
    }

    public static void main(String[] args) {
         final Friend alphonse = new Friend("Alphonse");
         final Friend gaston = new Friend("Gaston");

         new Thread(() -> alphonse.bow(gaston)).start();
         new Thread(() -> {
             try {
                 Thread.sleep(4000);
             } catch (InterruptedException e) {
                 e.printStackTrace();
             }
             gaston.bow(alphonse);
         }).start();
         // this code will be reached because the main thread is still running concurrently
         System.out.println("They stopped bowing...");

    }


}
