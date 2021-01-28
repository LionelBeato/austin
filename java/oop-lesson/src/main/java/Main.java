import polymorphism.Shape;
import polymorphism.Square;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
        /*
        *
        * Classes can be thought of as blueprints of objects
        * but in a lot of ways, they are serving as
        * custom types
        *
        * */

        // here int is known as a data type
        int x = 4;

        // below is an instance of a Pasta object
        // note that we're utilizing Pasta as a type
        // we also need to define its fields due to the defined parameters
        // from the constructor
        Pasta pasta = new Pasta("elbow", "wheat", true);
        System.out.println(pasta.getShape());

        // polymorphism
        // poly - many
        // morph - changing/forms/shapes
        // objects can be referred to as another type of object

        // Here I am declaring myPasta as a "Food"
        Food myPasta = new Pasta("elbow", "wheat", true);
        // but I cannot invoke Pasta methods due to polymorphism
//        myPasta.getShape();


        // this object is polymorphic
        // it is declared as one type and initialized as another
        Shape mySquare = new Square(4, 4, true);
        Square otherSquare = new Square(4,4,true);

        System.out.println(mySquare.toString());
        System.out.println(otherSquare.toString());
    }
}
