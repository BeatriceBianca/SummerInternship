package com.mindit.internship.services;

import com.mindit.internship.models.Users;

import java.util.List;

public interface UsersService {
    void addUser(Users user);
    List<Users> login(String username, String password);
}
