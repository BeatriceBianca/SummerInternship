package com.mindit.internship.services;

import com.mindit.internship.models.Admin;
import com.mindit.internship.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public void addAdmin(Admin admin) {
        adminRepository.save(admin);
    }

    public List<Admin> login(String username, String password){
        return adminRepository.findByUsernameAndPassword(username, password);

    }
}
