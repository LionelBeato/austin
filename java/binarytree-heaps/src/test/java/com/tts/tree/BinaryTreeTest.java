package com.tts.tree;

import org.junit.jupiter.api.Test;
import com.tts.tree.BinaryTree;
import static org.junit.jupiter.api.Assertions.*;

class BinaryTreeTest {

    // below is whats referred to a unit testing
    // a unit describes a fundamental, testable piece of code
    @Test
    public void test() {
        assertTrue(true);
    }

    @Test
    public void containsNodeTest() {
        BinaryTree binaryTree = BinaryTree.createBinaryTree();

        assertTrue(binaryTree.containsNode(7));
        assertTrue(binaryTree.containsNode(8));
    }

}