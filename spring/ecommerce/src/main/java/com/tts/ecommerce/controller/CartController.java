package com.tts.ecommerce.controller;

import com.tts.ecommerce.model.Product;
import com.tts.ecommerce.model.User;
import com.tts.ecommerce.service.ProductService;
import com.tts.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@ControllerAdvice
public class CartController {
    @Autowired
    ProductService productService;
    @Autowired
    UserService userService;

    @ModelAttribute("loggedInUser")
    public User loggedInUser() {
        return userService.getLoggedInUser();
    }

    @ModelAttribute("cart")
    public Map<Product, Integer> cart() {
        User user = loggedInUser();
        if (user == null)
            return null;
        System.out.println("Getting cart");
        return user.getCart();
    }

    @ModelAttribute("list")
    public List<Double> list() {
        return new ArrayList<>();
    }

    @GetMapping("/cart")
    public String showCart() {
        return "cart";
    }

    @PostMapping("/cart")
    public String addToCart(@RequestParam long id) {
        Product product = productService.findById(id);
        setQuantity(product, cart().getOrDefault(product, 0) + 1);
        return "cart";
    }

    @PostMapping("/cart/update")
    public String updateQuantities(@RequestParam long[] id,
                                   @RequestParam int[] quantity) {

        for (int i =0; i < id.length; i++) {
            Product product = productService.findById(id[i]);
            setQuantity(product, quantity[i]);
        }
        return "cart";
    }

    @PostMapping("/cart/remove")
    public String removeFromCart(@RequestParam long id) {
        Product product = productService.findById(id);
        setQuantity(product, 0);
        return "cart";
    }

    private void setQuantity(Product product, int quantity) {
        if (quantity > 0) {
            cart().put(product, quantity);
        } else {
            cart().remove(product);
        }
        userService.updateCart(cart());
    }
}
