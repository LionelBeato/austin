package com.tts.ecommerce.service;

import com.tts.ecommerce.model.Product;
import com.tts.ecommerce.model.User;
import com.tts.ecommerce.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
//    private Logger logger = LoggerFactory.getLogger(UserService.class);


    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public void saveNew(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    public void saveExisting(User user) {
        userRepository.save(user);
    }

    public User getLoggedInUser() {
        return findByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
    }

    public void updateCart(Map<Product, Integer> cart) {
        User user = getLoggedInUser();
        user.setCart(cart);
        saveExisting(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = findByUsername(username);
        if (user == null) throw new UsernameNotFoundException("Username not found.");
        return user;
    }
}
