package com.example.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://ui-appservice.azurewebsites.net")
public class MessageController {

    @GetMapping("/api/message")
    public String getMessage() {
        return "Hello from Spring Boot API - Azure!";
    }
}

