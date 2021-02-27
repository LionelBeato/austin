package com.example.validatingforminput;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.validation.Valid;

@Controller
public class WebController implements WebMvcConfigurer {

    /*
    *
    * addViewControllers is an implemented method from the interface WebMvcConfigurer
    *  It is mandated that an object of type ViewControllerRegistry is passed in (this is done by Spring)
    * on our registry object, we method chain to set up a controller and view
    *
    * */
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/results")
                .setViewName("results");
    }

    @GetMapping("/")
    public String showForm(PersonForm personForm) {
        return "form";
    }

    /*
    *
    * The method below accepts an object of type PersonForm
    * the @Valid annotation on personForm will allow personForm to be validated, checking field constraints
    * BindingResult is an object that allows for error checking with the associated method .hasErrors()
    *
    * */
    @PostMapping("/")
    public String checkPersonInfo(@Valid PersonForm personForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return "form";
        }
        return "redirect:/results";
    }

}
