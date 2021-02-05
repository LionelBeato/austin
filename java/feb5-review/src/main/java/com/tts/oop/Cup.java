package com.tts.oop;

public class Cup {

    private String shape;
    private String size;
    private boolean forHotLiquids;

    public Cup(String shape, String size, boolean forHotLiquids) {
        this.shape = shape;
        this.size = size;
        this.forHotLiquids = forHotLiquids;
    }

    public Cup() {

    }

    public String getShape() {
        return shape;
    }

    public void setShape(String shape) {
        this.shape = shape;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public boolean isForHotLiquids() {
        return forHotLiquids;
    }

    public void setForHotLiquids(boolean forHotLiquids) {
        this.forHotLiquids = forHotLiquids;
    }
}
