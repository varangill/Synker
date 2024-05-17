package com.synker.server.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {

    @GetMapping("/api/user")
    public Map<String, String> userDefault() {
        // Weird logic to return a JSON object (will change this later)
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello world");
        return response;
    }
}
