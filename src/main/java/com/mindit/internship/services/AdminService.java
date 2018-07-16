package com.mindit.internship.services;

import com.mindit.internship.models.Admin;

import java.util.List;

public interface AdminService {
    void addAdmin(Admin admin);
    List<Admin> login(String username, String password);
}
