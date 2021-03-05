package com.tts.ecommerce.controller;

import com.tts.ecommerce.model.User;
import com.tts.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.security.Principal;

@Controller
public class AuthenticationController {

    @Autowired
    private UserService userService;

    @GetMapping("/signin")
    public String login() {
        return "signin";
    }


    @PostMapping("/signin")
    public String signup(@Valid User user, @RequestParam String submit, BindingResult bindingResult,
                         HttpServletRequest request) throws ServletException {
        String password = user.getPassword();
        if (submit.equals("up")) {
            if (userService.findByUsername(user.getUsername()) == null) {
                userService.saveNew(user);
            } else {
                bindingResult.rejectValue("username", "error.user", "Username is already taken.");
                return "signin";
            }
        }

        request.login(user.getUsername(), password);
        System.out.println(user);
        return "redirect:/";
    }
}
