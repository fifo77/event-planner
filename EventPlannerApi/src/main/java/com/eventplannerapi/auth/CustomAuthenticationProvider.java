package com.eventplannerapi.auth;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.eventplannerapi.models.user.User;
import com.eventplannerapi.models.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import java.util.Collections;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {
    @Autowired
    private UserService userService;

    @Override
    public Authentication authenticate(Authentication auth) throws AuthenticationException {
        String username = auth.getName();
        String password = auth.getCredentials().toString();
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        //password = passwordEncoder.encode(password);
        User user = userService.findByUserName(username);
        //System.out.println("username:" + username + " password: " + password + " -> " + user);
        if (user != null && user.getPassword().equals(password)) {
            return new UsernamePasswordAuthenticationToken(username, password, Collections.emptyList());
        } else {
            throw new BadCredentialsException("External system authentication failed");
        }
    }

    @Override
    public boolean supports(Class<?> auth) {
        return auth.equals(UsernamePasswordAuthenticationToken.class);
    }
}