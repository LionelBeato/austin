package com.tts.tree;

public class BinaryTree {

    // every tree will at the very least have a root
    Node root;

    private Node addRecursive(Node current, int value) {
        // check for when current is null
        // this is going to be a conditional
        if (current == null) {
            return new Node(value);
        }

        // check if else for when value is greater or lesser than
        if ( value < current.value) {
            current.left = addRecursive(current.left, value);
        }  else if (value > current.value) {
            current.right = addRecursive(current.right, value);
        } else {
            // value already exists
            return current;
        }
        return current;
    }

    public void add(int value) {
        root = addRecursive(root, value);
    }


    public static BinaryTree createBinaryTree() {
        BinaryTree binaryTree = new BinaryTree();

        binaryTree.add(6);
        binaryTree.add(4);
        binaryTree.add(8);
        binaryTree.add(3);
        binaryTree.add(5);
        binaryTree.add(7);
        binaryTree.add(9);

        return binaryTree;
    }


    // recursive search for a value/node
    private boolean containsNodeRecursive(Node current, int value) {
        // nothing was found
        if (current == null) {
            return false;
        }
        // something was found
        if (value == current.value) {
            return true;
        }

        // check to see if the following is true
        return value < current.value
                // the expression is indeed true
                ? containsNodeRecursive(current.left, value)
                // the expression is indeed false
                : containsNodeRecursive(current.right, value);
    }

    // search for a value/node at the root
    public boolean containsNode(int value) {
        return containsNodeRecursive(root, value);
    }



}
