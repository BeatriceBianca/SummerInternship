package com.mindit.internship.services;

import com.mindit.internship.models.Cart;
import com.mindit.internship.models.Movie;

import java.util.List;

public interface CartService {

    void addCart(Cart movie);
    List<Cart> showCart(String userName);
    void deleteCart(Cart cart);
    List<Cart> find();
}
