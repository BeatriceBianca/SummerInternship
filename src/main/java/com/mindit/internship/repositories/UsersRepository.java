package com.mindit.internship.repositories;

import com.mindit.internship.models.Users;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UsersRepository extends CrudRepository <Users, Integer>{


    List<Users> findByUsernameAndPassword(String username, String password);
    List<Users> findByUsername(String username);

}
