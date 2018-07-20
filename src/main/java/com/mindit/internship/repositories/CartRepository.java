package com.mindit.internship.repositories;

import com.mindit.internship.models.Cart;
import com.mindit.internship.models.Movie;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CartRepository extends CrudRepository<Cart,Integer > {

    List<Cart> findByUserName(String userName);
    List<Cart> findAll();

}
