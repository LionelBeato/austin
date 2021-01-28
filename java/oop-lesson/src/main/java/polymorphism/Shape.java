package polymorphism;

public class Shape {

    private int width;
    private int height;

    public Shape(int width, int height) {
        this.width = width;
        this.height = height;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

//    @Override
//    public String toString() {
//        return "Shape{" +
//                "width=" + width +
//                ", height=" + height +
//                '}';
//    }


    // there is always a chain of inheritance
    // the method below is on every single class
    // the reason being is because every class is a subclass of Object
    @Override
    public String toString() {
        return "Shape{" +
                "width=" + width +
                ", height=" + height +
                '}';
    }

}
