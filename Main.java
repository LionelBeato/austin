public class Main {

    // recall that the main method is the entry point
    // this is where all java programs will start
    // args is representing the values that we pass into the program when we run it
    // these are known as command line arguments
    public static void main(String[] args) {

//        System.out.println(Arrays.toString(args));

        if (args[0].equals("dogs")) {
            System.out.println("Showing you pictures of dogs...");
        } else if (args[0].equals("cats")) {
            System.out.println("Showing you pictures of cats...");
        }

    }

}
