package com.tts.tree;

public class Node {

    // every node will have a value associated with it
    // lets say the value is an integer value
    int value;

    // every node can have a reference to
    // two other nodes left and right
    Node left;
    Node right;

    public Node (int value) {
        this.value = value;
        left = null;
        right = null;
    }

}
