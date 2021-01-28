package polymorphism;
// 👆 packages are glorified folders
// they are a way to organize code and to avoid name collisions

public class Square extends Shape {

    private boolean hasEqualSides;
    private final int amountOfSides = 4;

    public Square(int width, int height, boolean hasEqualSides) {
        super(width, height);
        this.hasEqualSides = hasEqualSides;
    }

    public boolean isHasEqualSides() {
        return hasEqualSides;
    }

    public int getAmountOfSides() {
        return amountOfSides;
    }

    // Override allows to change method implementation
    @Override
    public String toString() {
        return "Square{" +
                "hasEqualSides=" + hasEqualSides +
                ", amountOfSides=" + amountOfSides +
                '}';
    }

}


