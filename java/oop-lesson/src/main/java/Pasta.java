// this is a blueprint for our pasta objects
// note that Pasta is extending Food
// Pasta is acting as a child to the parent class Food
// As such, it inherits all of the qualities of Food
// The child can do everything the parent can plus more
public class Pasta extends Food {

    // below are properties of a class
    // in Java, these are known as fields
    // shape
    private String shape;
    // flour
    private String flour;
    // fresh or dry
    private boolean isDry;

    // we now need whats known as a constructor
    // this looks like a method, but it isn't
    // this piece of code does not return anything
    // you can almost think of a constructor as a contract of sorts
    public Pasta(String shape, String flour, boolean isDry) {
        super(true);
        // here we are binding the parameters to the fields of the class
        this.shape = shape;
        this.flour = flour;
        this.isDry = isDry;
    }

    // in order to access your variables you will have to set a public "getter"
    // getters are the ideal example of encapsulation
    // you are wrapping one piece of data with another to protect its functionality
    public String getShape() {
        return shape;
    }

}
