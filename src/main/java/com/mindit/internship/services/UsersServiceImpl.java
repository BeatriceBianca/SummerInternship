package com.mindit.internship.services;


import com.mindit.internship.models.Users;
import com.mindit.internship.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersServiceImpl implements UsersService {

    @Autowired
    private UsersRepository usersRepository;

    public void addUser(Users user){
        usersRepository.save(user);
    }

    public List<Users> login(String username, String password){
       return usersRepository.findByUsernameAndPassword(username, password);

    }
}
