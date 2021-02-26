package com.tts.authentication.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// this configuration class ultimately helps us resolve our views
@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {

        // here we can access the view "home.html"
        // by either going to "/home" or "/"
        registry.addViewController("/home")
                .setViewName("home");
        registry.addViewController("/")
                .setViewName("home");

        registry.addViewController("/hello")
                .setViewName("hello");

        registry.addViewController("/login")
                .setViewName("login");

    }


}
