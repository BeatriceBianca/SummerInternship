package com.mindit.internship.repositories;

import com.mindit.internship.models.Admin;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AdminRepository extends CrudRepository <Admin,Integer> {

    List<Admin> findByUsernameAndPassword(String username, String password);
}
