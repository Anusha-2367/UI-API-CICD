package com.example.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "https://ui-appservice.azurewebsites.net")
public class MessageController {

    @GetMapping("/api/employees")
    public List<Employee> getEmployees() {
        return Arrays.asList(
            new Employee(1, "Rahul Sharma", "Engineering", "Software Developer", "Active"),
            new Employee(2, "Priya Reddy", "Human Resources", "HR Manager", "Active"),
            new Employee(3, "Arjun Kumar", "DevOps", "DevOps Engineer", "Active"),
            new Employee(4, "Sneha Patel", "Finance", "Financial Analyst", "On Leave"),
            new Employee(5, "Vikram Singh", "Engineering", "Senior Developer", "Active"),
            new Employee(6, "Anjali Rao", "Marketing", "Marketing Manager", "Active"),
            new Employee(7, "Kiran Das", "DevOps", "Cloud Engineer", "Active"),
            new Employee(8, "Meena Kapoor", "Finance", "Accountant", "On Leave")
        );
    }

    @GetMapping("/api/message")
    public String getMessage() {
        return "Hello from Employee Management API - Azure!";
    }

    public static class Employee {

        private int id;
        private String name;
        private String department;
        private String role;
        private String status;

        public Employee(int id, String name, String department, String role, String status) {
            this.id = id;
            this.name = name;
            this.department = department;
            this.role = role;
            this.status = status;
        }

        public int getId() {
            return id;
        }

        public String getName() {
            return name;
        }

        public String getDepartment() {
            return department;
        }

        public String getRole() {
            return role;
        }

        public String getStatus() {
            return status;
        }
    }
}